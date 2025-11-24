import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "../features/Auth/Auth.slice"

const store = configureStore({
    reducer : AuthReducer
});

export default store;