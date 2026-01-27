// import axios from "axios";
import api from "../config/axios.config";


export const getOtp = async (gmail)=>{

    try {
        const data = await api.get(`/finPocket/api/auth/sendOtp/${gmail}`);
        console.log(`data is ${data.data}`);

        if(data.status === 200){
            const otp = data.data;
            return {status:200,otp};
        }else{
            let err = data.data;
            console.error(`${data.status} ${err}`);
            return {status:400,error:err};
            
            
        }
    } catch (error) {
        console.log("error in getOtp "+ error);
        return {status:400};
        
    }


}