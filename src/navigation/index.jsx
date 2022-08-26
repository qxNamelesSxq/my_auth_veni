import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen'

const Stack =  createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name = "SignIn" component={SignInScreen} />
    <Stack.Screen name = "SignUp" component={SignUpScreen} />
    <Stack.Screen name = "ConfirmEmail" component={ConfirmEmailScreen} />
    <Stack.Screen name = "ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name = "ResetPassword" component={ResetPasswordScreen} />

    <Stack.Screen name = "Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation