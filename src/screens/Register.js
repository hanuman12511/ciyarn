
//hook  useState
import React, { useState } from 'react'
import {Text,View,StyleSheet,TextInput,Dimensions,Button} from 'react-native'
import HeadderComponent from '../components/HeaderComponent'


const W= Dimensions.get('window').width
const H= Dimensions.get('window').height
export default function Register(){

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")


   function UserRegister(){
    console.log("UserRegister");
    console.log("name=",name);
    console.log("email=",email);
    UserLogin()
    setEmail("")
    setName("")
}
    function UserLogin(){
            console.log("open login page");
            console.log("name=",name);
            console.log("email=",email);
            setEmail("")
            setName("")
                            
    }



    return(
        <>
        <HeadderComponent/>
        <View style={styles.header_View}>
        <Text style={styles.text_header}>Register </Text>
        </View>
        <View style={styles.view_line}></View>
       <View style={styles.main_view}>
            <View style={styles.Text_View}>
                <Text style={styles.Text_name}>Enter Name:</Text>
            </View>
            <View style={styles.Text_input}>
                <TextInput  style={styles.input}  placeholder='enter name...'/>
            </View>
        </View>
        <View style={styles.main_view}>
            <View style={styles.Text_View}>
                <Text style={styles.Text_name}>Enter email:</Text>
            </View>
            <View style={styles.Text_input}>
                <TextInput value={email} onChangeText={d=>setEmail(d)} style={styles.input} placeholder='enter email...'/>
            </View>
        </View>
        <View style={styles.main_view}>
            <View style={styles.Text_View}>
                <Text style={styles.Text_name}>Enter Password:</Text>
            </View>
            <View style={styles.Text_input}>
                <TextInput style={styles.input} placeholder='********'/>
            </View>
        </View>
        <View style={styles.btn_view}>
            <View style={styles.btn}>
                <Text style={styles.btn_text}  onPress={UserRegister}> Register</Text>
            </View>
            
        </View>
        <View style={styles.view_line}></View>
        <View style={styles.btn_view}>
            <View style={styles.btn}>
                <Button style={styles.btn_text} onPress={UserLogin} title='Login'/>
            </View>
            
        </View>
        
        </>
    )
}

const styles =StyleSheet.create({
    Text_input:{
        width:W,
        height:H*.1,
        backgroundColor:'white',
        alignItems:'center'
    },
    main_view:{
        width:W,
        margin:1
    },
    Text_View:{
        width:W,
        backgroundColor:'white',
        padding:10
    },
    Text_name:{
        fontSize:18
    },
    text_header:{
        fontSize:24,
        color:'red'

    },
    view_line:{
        width:W,
        height:H*.005,
        backgroundColor:'lightblue',
        margin:10
    },
    input:{
        width:W*.9,
        borderRadius:20,
        backgroundColor:"#CBDDE3",
        color:'#01B5ED'
    },
    btn:{
       backgroundColor:"#01B5ED" ,
       width:W*.96,
       borderRadius:30,
       alignItems:'center',
       padding:10
       
    },
    btn_text:{
        color:'#fff',
        fontSize:24,
    },
    btn_view:{
        width:W,
        margin:1,
        alignItems:'center'
    }
})
