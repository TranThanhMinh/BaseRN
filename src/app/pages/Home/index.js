import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import style from "./style";
import { useSelector,useDispatch } from "react-redux";
import { getEmployees } from "../../actions/example";
import * as ActionTypes from '../../actions/ActionTypes'

const Home = (props) => {
    const insets = useSafeAreaInsets()

    const { exampleReducer } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        const { type, data, message } = exampleReducer
        switch (type) {
            case ActionTypes.EMPLOYEES_PENDING:
                break;
            case ActionTypes.EMPLOYEES_SUCCESS:
               console.log('EMPLOYEES_SUCCESS',JSON.stringify(data.response.data.data))
                break;
            case ActionTypes.EMPLOYEES_FAIL:
                console.log('EMPLOYEES_FAIL',data)
                break;

        }
    }, [exampleReducer])


    useEffect(()=>{
        console.log('get data from login',props.item)
        dispatch(getEmployees())
  },[])


    return (
        <View style={[style.container, { top: insets.top }]}>
            <TouchableOpacity onPress={()=>props.goBack()}>
                <Text>Home</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Home;