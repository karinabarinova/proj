const db = require('../sequelize/models');
const Event = db.event;
const User = db.user;
const Company = db.company;

module.exports = {
    getAll,
    getById,
    add,
    update,
    delete: _delete
}

async function getAll() {
    return await Event.findAll();
}

async function getById(id) {
    return await getEvent(id);
}

async function add({name, description, startDate, location, price, promoCodes}, id) {
    //startDate time format  "2021-06-11T14:00Z",
    const user = await User.findByPk(id);
    if (!user.hasCompanies) {
        throw 'Create a company to be able to create events';
    }
    // const company = await user.getCompanies();
    const company = await Company.findOne({where: {owner: id}})
    console.log("company", company);

    const exists = await Event.findOne({
        where: {
            name
        }
    })
    if (exists)
        throw 'Event already exists';

    //first latitude, then longitude
    const point = {
        type: 'Point',
        coordinates: location
    }
    const event = await Event.create({
        name,
        description,
        startDate,
        location: point,
        price,
        promoCodes,
        organizer: company.companyId
    });
    await company.addEvent(event);
    return event;
}

async function update(params, id) {
    const exists = await Event.findOne({
        where: {
            name: params.name
        }
    })
    if (exists)
        throw 'Event already exists';
    const event = await getEvent(id);
    Object.assign(event, params);
    await event.save();
    return event.get(); //do I really need it?
}

async function _delete(id) {
    const event = await getEvent(id);
    await event.destroy();
}

async function getEvent(id) {
    const event = await Event.findByPk(id);
    if (!event) throw 'Event not found';
    return event;
}