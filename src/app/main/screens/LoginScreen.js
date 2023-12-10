import React from "react";
import { Login } from "../../pages";


const LoginScreen =({navigation})=>{
    return(
      <Login
       goToHome={()=>navigation.navigate('Home')}/>
    )
}

export default LoginScreen;