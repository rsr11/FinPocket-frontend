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
             state.User.email = action.payload.email;
             state.User.name = action.payload.name;
             state.User.profession = action.payload.profession;
             state.User.monthlyIncome = action.payload.monthlyIncome;
        
                }

     }
});

export const {UpdateLoggedIn} = AuthSlice.actions

export default AuthSlice.reducer

// At the bottom of your slice file
// export const selectUser = (state) => state.Auth.User;

// console.log(selectUser);


// export const selectIsLoggedIn = (state) => state.Auth.User.isLoggedIn;  
// export const selectUserEmail = (state) => state.Auth.User.email;

// console.log(selectUser.isLoggedIn);
