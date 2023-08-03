import React, { useState } from 'react'
import {Text,View,StyleSheet,Image,Dimensions} from 'react-native'
import home from "../images/icon/home.png"
import cart from '../images/icon/cart.png'
import notification from '../images/icon/notification.png'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;

export default function HeadderComponent(props){
 
   
    return(
        <View style={styles.header}>
        <View style={styles.header_left}>
            <Image source={props.iconl} style={styles.home_icon}/>
            <Text style={styles.home_text}>
               {props.title}
             </Text>
        </View>
        <View style={styles.header_right}>
        <Image source={notification} style={styles.home_icon}/>
        <Image source={cart} style={styles.home_icon}/>
        </View>    
    </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"yellow"
    },
    header:{
        paddingTop:h*.03,
        paddingBottom:h*.03,
        width:w,
        flexDirection:'row',
        backgroundColor:"#fff",
        alignItems:'center'
    },
    header_left:{
        width:w*.5,
        flexDirection:'row',
        marginLeft:w*.05
    },
    
    header_right:{
        width:w*.4,
        flexDirection:'row',
        justifyContent:'flex-end'

    },
    home_text:{
      marginLeft:w*.05,
        fontSize:20
    },
    home_icon:{
        width:w*.08,
        height:w*.08,
        marginRight:10
    },
    banner:{
        width:w,
        height:h*.3
    }

})