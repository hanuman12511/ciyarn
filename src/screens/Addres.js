
import React, { useState } from 'react'
import { Text ,Image,View,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
const w =Dimensions.get('window').width
const h =Dimensions.get('window').height

export default function Addres({route,navigation}){

    const defaultadd = "Not Addres"
    console.log("address=",route.params.state);
const [add,setAdd] = useState(null)
const [pay,setPay] = useState(100)

function addresUpdate(data){
    setAdd(data)
    console.log(data);
} 


    function addaddres(){
        alert("add Addres")
        const params={
            addaddres:addresUpdate
        }
        navigation.push('addaddres',params)
    }
function paymentsend(){
    
    const params = {
        addres:add,
        payment:pay
    }
console.log(params);
    navigation.navigate("payment",params)
}
    return(
       <>
       <View style={styles.header}>

       </View>
        <View style={styles.container}>
            <View style={styles.addresview}>
                <Text style={styles.addrestext}>{add!=null?add:defaultadd}</Text>
                <TouchableOpacity onPress={addaddres} style={styles.addadresbtn}>
                <Text  style={styles.addaddrestext}>Add Addres</Text>
                </TouchableOpacity>
           </View>
           <View style={styles.paymentget}>

           </View>
           <View style={styles.paymentview}>
           <Text style={styles.addrestext}>Total Pay</Text>
                <TouchableOpacity onPress={paymentsend} style={styles.addadresbtn}>
                <Text  style={styles.addaddrestext}>Payment Now</Text>
                </TouchableOpacity>

           </View>
            </View>
       </>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow'
    },
    header:{
        height:h*.1
    },
    addresview:{
       width:w,
       height:h*.1,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center'
    },
    addadresbtn:{

        alignItems:'center',
        backgroundColor:'#02CFFB',
        marginHorizontal:10,
        borderRadius:10
       

    },
    addaddrestext:{
        alignItems:'center',
        padding:15,
        color:'#fff'
    },
    addrestext:{
        flex:2,
        marginHorizontal:10
      

    },
    paymentget:{
        flex:4,
    },
    paymentview:{
        height:h*.1,
        flexDirection:'row'
    }
})