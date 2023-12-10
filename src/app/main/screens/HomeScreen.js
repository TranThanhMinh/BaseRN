import React from "react";
import { Home } from "../../pages";


const HomeScreen =({navigation})=>{
    return(
      <Home 
      goBack ={()=>navigation.goBack()}/>
    )
}

export default HomeScreen;