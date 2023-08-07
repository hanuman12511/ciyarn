
//hook  useState
import React, { useState } from 'react'
import {Text,View,StyleSheet,TextInput,Dimensions,Button,ScrollView} from 'react-native'
import HeadderComponent from '../components/HeaderComponent'
import axios from 'axios'

const W= Dimensions.get('window').width
const H= Dimensions.get('window').height
export default function Register(){

    const[fname,setFName] = useState("")
    const[lname,setLName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[cpassword,setCPassword] = useState("")


async function UserRegister(){
const params={
    "fname":fname,
    "lname":lname,
    "email":email,
    "pass":password,
    "cpass":cpassword
}

const res = await axios("http://ankursingh.xyz/api/registerUser.php",params)
console.log(res.data);

const {message,success} = res.data
if (success){
    alert(message)

}
    setEmail("")
    setFName("")
    setLName("")
    setPassword("")
    setCPassword("")
}
    function UserLogin(){
            
            console.log("email=",email);
            setEmail("")
           
            setPassword("")
            
                            
    }



    return(
        <>
        <HeadderComponent  title="RegisterScreen" iconl={require('../images/icon/back.png')} iconr="" iconr1="" />
       <ScrollView style={styles.container}>
        <View style={styles.header_View}>
        <Text style={styles.text_header}>Register </Text>
        </View>
        <View style={styles.view_line}></View>
       <View style={styles.main_view}>
             <View style={styles.Text_input}>
                <TextInput  value={fname} onChangeText={d=>setFName(d)}style={styles.input}  placeholder='enter name...'/>
            </View>
        </View>
        <View style={styles.main_view}>
           
            <View style={styles.Text_input}>
                <TextInput  value={lname} onChangeText={d=>setLName(d)}style={styles.input}  placeholder='enter name...'/>
            </View>
        </View>
        <View style={styles.main_view}>
           
            <View style={styles.Text_input}>
                <TextInput value={email} onChangeText={d=>setEmail(d)} style={styles.input} placeholder='enter email...'/>
            </View>
        </View>
        <View style={styles.main_view}>
            
            <View style={styles.Text_input}>
                <TextInput value={password} onChangeText={d=>setPassword(d)} style={styles.input} placeholder='********'/>
            </View>
        </View>
        <View style={styles.main_view}>
            
            <View style={styles.Text_input}>
                <TextInput value={cpassword} onChangeText={d=>setCPassword(d)} style={styles.input} placeholder='********'/>
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
        </ScrollView>
        </>
    )
}

const styles =StyleSheet.create({
    container:{
      width:W,
      height:H 
    }
    ,
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
