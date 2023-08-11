import React from 'react'
import {Text} from 'react-native'
export default function Addtocart({route}){
    console.log("add to cart===",route.params);
    return(
        <Text> add to cart</Text>
    )
}