import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const UserGurd = ({user})=>{
   // const nav = useNavigate();
    useEffect(()=>{
        if(!user){
          //  nav('/home')
        }
    },[user])
};

export default UserGurd;