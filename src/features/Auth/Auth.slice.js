import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    User : {
        name : "",
        email : "",
        isLoggedIn : false,
        profession : "",
        monthlyIncome:0,

    }
}

 const AuthSlice = createSlice({
    name : 'Auth',
    initialState,
    reducers:{ 
        UpdateLoggedIn : (state, action)=>{
                      
             state.User.isLoggedIn = action.payload.isLoggedIn;
             state.User.emailmail = action.payload.email;
             state.User.name = action.payload.name;
             state.User.profession = action.payload.profession;
             state.User.monthlyIncome = action.payload.monthlyIncome;
        
                }

     }
});

export const {UpdateLoggedIn} = AuthSlice.actions

export default AuthSlice.reducer