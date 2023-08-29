import React, { useContext } from 'react'
import {Text} from 'react-native'
import { ContextAuth } from '../context/Context'
export default function OrderConfirm(){
    const data = useContext(ContextAuth)
    const{orderdata} =data
    console.log("order confirm");
    console.log(orderdata);
    return(
        <Text>OrderConfirm</Text>
    )
}