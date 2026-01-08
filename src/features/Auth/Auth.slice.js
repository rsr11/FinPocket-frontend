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
            
            
             state.User.isLoggedIn = action.payload.isLoggedIn;
             state.User.gmail = action.payload.email;
             state.User.password = action.payload.password;
             state.User.name = action.payload.name;

            //  localStorage.setItem("UserLogined",action.payload.isLogin);
            //  localStorage.setItem("UserName",action.payload.name);

            console.log(state.User.name);
            console.log(state.User.isLoggedIn);
            
            

            }
        // LoggedOut : (state,action)=>
     }
});

export const {UpdateLoggedIn} = AuthSlice.actions

export default AuthSlice.reducer