import { supabase } from "../supabase";


export const GoogleLogin= async ()=>{

         try {
            
             const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
           })
           if(error) console.error("Google login error :"+ error.message);

         } catch (error) {
             console.log(error);
             
         }
           
        }





export const OtpGenrator = ()=>{
    let arr = [];
  
    for(let i=0;i<6;i++){
        arr[i] = Math.floor(Math.random()*9); 
    }
   //  console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]);
    return arr;  
};





