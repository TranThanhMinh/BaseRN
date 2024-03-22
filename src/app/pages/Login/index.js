import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import style from "./style";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/example";
import * as ActionTypes from '../../actions/ActionTypes'

const Login = (props) => {
    const insets = useSafeAreaInsets()
    const [username, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const { exampleReducer } = useSelector(state => state)

    const dispatch = useDispatch()


    useEffect(() => {
        const { type, data, message } = exampleReducer
        switch (type) {
            case ActionTypes.EXAMPLE_PENDING:
                break;
            case ActionTypes.EXAMPLE_SUCCESS:
               // console.log('EXAMPLE_SUCCESS',data)
                props.goToHome(data)

                break;
            case ActionTypes.EXAMPLE_FAIL:
                console.log('EXAMPLE_FAIL',data)
                break;

        }
    }, [exampleReducer])

    return (
        <View style={[style.container, { top: insets.top }]}>
            <TextInput style={style.input} placeholder="user name" text={username} onChangeText={text => setUserName(text)} />
            <TextInput style={style.input} placeholder="password" text={pass} onChangeText={text => setPass(text)} secureTextEntry={true}/>
            <TouchableOpacity onPress={() => dispatch(login({user:username,pass:pass}))}>
                <Text style={style.btnLogin}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Login;