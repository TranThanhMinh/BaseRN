import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import style from "./style";

const Home = (props) => {
    const insets = useSafeAreaInsets()

    return (
        <View style={[style.container, { top: insets.top }]}>
            <TouchableOpacity onPress={()=>props.goBack()}>
                <Text>Home</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Home;