import React from "react";
import { Home } from "../../pages";


const HomeScreen =({navigation,route})=>{
  const { item } = route.params
    return(
      <Home 
      goBack ={()=>navigation.goBack()}
      item ={item}/>
    )
}

export default HomeScreen;