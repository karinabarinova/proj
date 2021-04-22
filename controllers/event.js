const express = require('express');
const router = express.Router();
const service = require('../services/event');
const authJwt = require('../middleware/authJwt');

router.post('/add', authJwt.verifyToken, add);
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id', authJwt.verifyToken, update);
router.delete('/:id', authJwt.verifyToken, _delete);

module.exports = router;

function getAll(req, res, next) {
    service.getAll()
        .then(data => res.status(200).json(data))
        .catch(next);
}

function getById(req, res, next) {
    service.getById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(next);
}

function add(req, res, next) {
    service.add(req.body, req.userId)
        .then((data) => res.status(200).json({ data, message: "Event created successfully"}))
        .catch(next);
}

function update(req, res, next) {
    service.update(req.body, req.params.id)
        .then((data) => res.status(200).json({data, message: "Event updated successfully"}))
        .catch(next);
}

function _delete(req, res, next) {
    service.delete(req.params.id)
        .then(() => res.status(200).json({ message: "Event deleted successfully"}))
        .catch(next);
}