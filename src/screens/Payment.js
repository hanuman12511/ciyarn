import React, { useEffect, useMemo, useState } from 'react'
import {Text,StyleSheet,View,Dimensions,TouchableOpacity} from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height
export default function Payment(props){
    const [selectedId, setSelectedId] = useState();
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Pay OffLine',
            value: 'cod'
        },
        {
            id: '2',
            label: 'Pay Online',
            value: 'online'
        }
    ]), []);

    useEffect(()=>{
        alert(selectedId)
    },[selectedId])
    return(
       <>
       <Text style={styles.selectTextview}> Select Payment Mode</Text>
       <View style={styles.paymentmodebtnview}>
       <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
        </View>
        <View style={styles.btnvieworder}>
            <TouchableOpacity style={styles.btnorder}>
                <Text>Order Now</Text>
            </TouchableOpacity>
        </View>
       </>
    )
}
const styles = StyleSheet.create({
    selectTextview:{
        width:w,
        padding:15,
        backgroundColor:'yellow',
        color:"#000"
    },
    paymentmodebtnview:{
        width:w,
        height:h*.3,
        color:"#000",
        alignItems:'center',
        justifyContent:'center'
    },
    btnvieworder:{
        width:w,
      
        color:"#000",
        position:'absolute',
        left:0,
        right:0,
        bottom:0
    },
    btnorder:{
        width:w,
        padding:15,
        backgroundColor:'yellow',
        color:"#000",
        
    }
})