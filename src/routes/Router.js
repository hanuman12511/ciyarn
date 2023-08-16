import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import Register from '../screens/Register'
import LoginScreen from '../screens/LoginScreen'
import Details from '../screens/Details';
import Addtocart from '../screens/Addtocart';
import AddAddres from '../screens/AddAddres';

const Stack = createStackNavigator();
export default function Router(){
    return(
        <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name="home" component={HomeScreen}/>
                    <Stack.Screen name="details" component={Details}/>
                    <Stack.Screen name="register" component={Register}/>
                    <Stack.Screen name="login" component={LoginScreen}/>
                    <Stack.Screen name="addtocart" component={Addtocart}/>
                    <Stack.Screen name="addaddres" component={AddAddres}/>
                </Stack.Navigator>
        </NavigationContainer>
        
    )
}