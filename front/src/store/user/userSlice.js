import { createSlice } from "@reduxjs/toolkit";
import jwt from '../auth/index';

export const getUserInfo = () => async (dispatch, getState) => {
    return jwt
        .getUserInfo()
        .then((data) => {
            return dispatch(setUserInfo(data))
        })
        .catch(error => {
            return dispatch(setMessage(error.message))
        })
}
export const setUserPassword = () => async (dispatch, getState) => {
    return jwt
        .resetPassword()
        .then((data) => {
            return dispatch(setUserInfoPassword(data))
        })
        .catch(error => {
            return dispatch(setMessage(error.message))
        })
}

export const getOrders = () => async (dispatch, getState) => {
    return jwt
        .getOrders()
        .then((data) => {
            return dispatch(setOrders(data))
        })
        .catch(error => {
            return dispatch(setMessage(error.message))
        })
}

const initialState = {
    user: {},
    orders: {},
    selectedOrder: {},
    message: '',
    changePassword: ''
}

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.user = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
        setOrders: (state, action) => {
            state.orders = action.payload
        },
        setSelectedOrder: (state, action) => {
            state.selectedOrder = action.payload
        },
        setUserInfoPassword: (state, action) => {
            state.user.password = action.payload
        }
    },
    extraReducers: {}
})

export const { setUserInfo, setMessage, setOrders, setSelectedOrder, setUserInfoPassword } = userSlice.actions

export default userSlice.reducer
