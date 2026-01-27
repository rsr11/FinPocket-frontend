import axios from "axios";
import api from "../config/axios.config";

export const LoginApi = async (email,password)=>{
   
     alert(email +" " + password)
    try {
        alert("try block entered!");
        const data = await api.post("/finPocket/api/auth/LoginUser",{
        email:email,
        password:password
     },{
        headers:{
            'Content-Type':'application/json'
        }
    });

    console.log(data);
    // (data);

    if(data.status === 200){
        alert(200);
        return data.data;  
      }else{
        alert(404);
        return {mssg:"Something went wrong!"};
      }
    } catch (error) {
        console.log(error);
        
    }
     

}