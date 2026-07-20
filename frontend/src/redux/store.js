import {configureStore} from '@reduxjs/toolkit'
import authReader from './authSlice'
const store=configureStore({
    reducer:{
        auth:authReader
    },
})
export default store;