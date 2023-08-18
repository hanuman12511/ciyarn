import React, { useState } from 'react'
import {Text,View,StyleSheet,TouchableOpacity,TextInput,Dimensions} from 'react-native'
const w= Dimensions.get('screen').width
const h= Dimensions.get('screen').height
export default function AddAddres(props){
    const[addres,setAddres] = useState('')


function addaddresdata(){
    alert(addres)
    console.log(props.route.params)
    const {addaddres} =props.route.params
    addaddres(addres)
    console.log(props.navigation);
    props.navigation.goBack()
}
    return(
        <>
        <View style={styles.container}>
            <View style={styles.viewText}>

                    <Text style={styles.textname}>Enter Addres:</Text>
            </View>
            
            <View style={styles.viewinput}>
                <TextInput  value={addres} onChangeText={d=>setAddres(d)} style={styles.inputaddres}  placeholder='enter addres'/>
            </View>
            
            <View style={styles.viewbtn}>
                <TouchableOpacity style={styles.addresbtn} onPress={addaddresdata}>
                    <Text style={styles.btntext}>Add Address</Text>
                </TouchableOpacity>

            </View>
        </View>
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#C6EAF6',
       paddingVertical:80
    },
    viewText:{
       width:w,
       height:h*.1,
        backgroundColor:'#fff',
        justifyContent:'center'
    },
    textname:{
        fontSize:22,
        color:'#000',
        marginLeft:20
    },
    viewinput:{
        marginTop:10,
       height:h*.2,
        justifyContent:'center',
        marginHorizontal:10
    },
    inputaddres:{
        height:h*.15,
       lineHeight:10, 
        borderRadius:20,
        backgroundColor:'#fff'
    },
    viewbtn:{
        marginTop:10,
       height:h*.1,
        justifyContent:'center',
        marginHorizontal:20

    },
    addresbtn:{
        backgroundColor:"#013344",
      borderRadius:20,
        alignItems:'center',

       
      

    },
    btntext:{
        color:'#fff',
        padding:20,
        fontSize:18
        
    }

})