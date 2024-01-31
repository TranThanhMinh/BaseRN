import React from "react";
import { Login } from "../../pages";


const LoginScreen =({navigation})=>{
    return(
      <Login
       goToHome={(item)=>navigation.navigate('Home',{item:item})}/>
    )
}

export default LoginScreen;