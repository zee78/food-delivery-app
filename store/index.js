import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import drawerReducer from './drawer/drawerSlice';
import userReducer from "./user/userSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        drawer: drawerReducer,
        user: userReducer,
    },
});