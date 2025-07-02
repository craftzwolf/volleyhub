import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

export type AuthStackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator <AuthStackParamList>();
const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName = "LoginScreen"
            screenOptions = {{ headerShown: false }}
        >
            <Stack.Screen name = "LoginScreen" component = {LoginScreen} />
            <Stack.Screen name = "RegisterScreen" component = {RegisterScreen} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
