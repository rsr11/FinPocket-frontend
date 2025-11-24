import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      
    User : {
        name : "",
        gmail : "",
        password : "",
        isLoggedIn : false,

    }
}

export const AuthSlice = createSlice({
    name : 'Auth',
    initialState,
    reducers:{ 
        UpdateLoggedIn : (state, action)=>{
            console.log(action);
            
             state.User.isLoggedIn = action.payload.isLogin;
             state.User.gmail = action.payload.email;
             state.User.password = action.payload.password;
             state.User.name = action.payload.name;
            }
        // LoggedOut : (state,action)=>
     }
});

export const {UpdateLoggedIn} = AuthSlice.actions

export default AuthSlice.reducer