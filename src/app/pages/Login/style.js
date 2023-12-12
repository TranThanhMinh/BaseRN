import { StyleSheet } from "react-native";
import Color from "../../common/Color";


const  style = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10
   },
   input:{
    width:'100%',
    height:45,
    paddingHorizontal:10,
    borderColor:'red',
    borderRadius:10,
    borderWidth:1,
    marginVertical:5
   },
   btnLogin:{
    paddingVertical:5,
    paddingHorizontal:20,
    borderColor:Color.blue,
    borderWidth:1,
    borderRadius:5
   }
})

export default style;