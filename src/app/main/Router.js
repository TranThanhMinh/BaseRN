import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import Constants from '../common/Constants';

const Stack = createStackNavigator();

function AppStack(props) {
  const [language, setLanguage] = useState('vn')

  const onChangeLang = (newLang) => {
    setTimeout(() => setLanguage(newLang), 300)
  }

  const defaultOptions = {
    headerStyle: { backgroundColor: '#00B0FF' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white'
  }

  return (
    <NavigationContainer ref={props.navigationRef}>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerBackTitleVisible: false,
          ...defaultOptions,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name={Constants.Screen.Login} options={{ headerShown: false }} component={LoginScreen} />     
        <Stack.Screen name={Constants.Screen.Home} options={{ headerShown: false }}  component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack;
