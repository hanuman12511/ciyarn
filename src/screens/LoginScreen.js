import axios from 'axios'
import React, { useState } from 'react'
import {Text,View,StyleSheet,Dimensions,TextInput,TouchableOpacity} from 'react-native'
const W= Dimensions.get('window').width
const H= Dimensions.get('window').height
export default function LoginScreen({navigation}){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    async function login(){
        const params= {
            "email":email,
            "pass":password
        }
        console.log(params);
        
        const res = await axios("http://ankursingh.xyz/api/Employeelogin.php",params)
        const {message,success} = res.data
        if (success){
            alert(message)
        navigation.navigate('home')
        }
        else{
            alert(message)
        } 
        setEmail("")
        setPassword("")
    }
    return(
        <View style={styles.container}>
                <View style={styles.View_header}>
                    <Text style={styles.header_text}>Login Screen</Text>
                </View>
                <View style={styles.email_view}>
                    <Text style={styles.email_text}>Enter Email :</Text>
                    <View style={styles.input_view}>
                    <TextInput  value={email} onChangeText={d=>setEmail(d)} style={styles.email_input}placeholder='enter email..'/>
                    </View>
                </View>
                <View style={styles.email_view}>
                    <Text style={styles.email_text}>Enter Password :</Text>
                    <View style={styles.input_view}>
                    <TextInput value={password} onChangeText={d=>setPassword(d)} style={styles.email_input}placeholder='*********'/>
                    </View>
                </View>
                <View  style={styles.btn_view}>
                    <TouchableOpacity style={styles.btn} onPress={login}>
                        <Text style={styles.btn_text}>Login</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:W,
        height:H,
        backgroundColor:'white'
    },
    View_header:{
        width:W,
        backgroundColor:'yellow'
    },
    header_text:{
        color:'blue',
        fontSize:22,
        padding:10
    },
    email_view:{
        width:W,
        height:H*.2,
        backgroundColor:'white',
       
    },
    email_text:{
        
        fontSize:22,
        padding:10
    }
    ,
    email_input:{
        width:W*.8,
        backgroundColor:'lightgray',
        fontSize:22,
        padding:10,
        borderRadius:20
    },
    input_view:{
        width:W,
        height:H*.2,
        backgroundColor:'white',
        alignItems:'center'
    },
    btn_view:{
        width:W,
       
        backgroundColor:'white',
        alignItems:'center' 
    }
    ,
    btn:{
        width:W*.8,
       
        backgroundColor:'yellow',
        alignItems:'center' ,
        borderRadius:20
    },
    btn_text:{
       fontSize:20,
        padding:20,
      
    }
})