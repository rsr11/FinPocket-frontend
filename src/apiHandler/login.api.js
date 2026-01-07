import axios from "axios";

export const LoginApi = async (email,password)=>{
   
     alert(email +" " + password)
    try {
        alert("try block entered!");
        const data = await axios.post("http://localhost:4040/finPocket/api/auth/LoginUser",{
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