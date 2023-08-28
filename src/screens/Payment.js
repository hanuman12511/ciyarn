import React, { useEffect, useMemo, useState } from 'react'
import {Text,StyleSheet,View,Dimensions,TouchableOpacity, TextInput} from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';
import OtpInputs from 'react-native-otp-inputs';
const w = Dimensions.get('screen').width
const h = Dimensions.get('screen').height
export default function Payment({route,navigation}){

    console.log("payment");

    const {addres,payment} = route.params
    const [selectedId, setSelectedId] = useState();
    const [isConfirm, setIsConfirm] = useState(false);
    const [isOTP, setIsOTP] = useState(false);
    const [otp, setOTP] = useState();
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Pay OffLine',
            value: 'cod'
        },
      
    ]), []);
    const radioButtons1 = useMemo(() => ([
        
        {
            id: '2',
            label: 'Pay Online',
            value: 'online'
        }
    ]), []);

    useEffect(()=>{
        alert(selectedId)
    },[selectedId])

   
    function PayOffline(){
        return<View>
        <View style={styles.addresview}>
            <Text>{addres}</Text>
        </View>
        <View style={styles.productview}>

        </View>
        <View style={styles.payview}>
        <Text>{payment}</Text>
        <TouchableOpacity onPress={Confirmbtn}>
            <Text>Confirm</Text>
        </TouchableOpacity>
        
        </View>
        </View>
    }
    
    function PayONline(){
        return<>
        <Text>Pay  on line</Text>
        </>
    }
    function Confirmbtn(){
       setIsConfirm(!isConfirm)
    }
    function confirmphone(){
      setIsOTP(!isOTP)
    }
    function confirmData(){
        return<View style={styles.confirmView}>
                <View style={styles.phoneView}>
                    <TextInput placeholder='enter number'/>
                        <TouchableOpacity onPress={confirmphone} style={styles.btnorder}>
                        <Text>Confirm</Text>
            </TouchableOpacity>
               
                </View>
        </View>
    }

function OTPConfirm(){
    return<View style={styles.confirmView}>
                <View style={styles.phoneView}>
                <OtpInputs
              
          handleChange={(code) => setOTP(code)}
          numberOfInputs={4}
          inputStyles={{backgroundColor:'#fff',borderRadius:50}}
          
        />
        <TouchableOpacity onPress={Otp} style={styles.btnorder}>
                        <Text>Confirm</Text>
            </TouchableOpacity>
               
                </View>
        </View>
}


function Otp(){
    alert(otp)
    if(otp==="1111"){
        navigation.navigate("orderconfirm")
    }
} 

    return(
       <>
       <Text style={styles.selectTextview}> Select Payment Mode</Text>
       <View style={styles.paymentmodebtnview}>
       <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
        <View style={styles.payoffview}>
                {selectedId=="1"? PayOffline():null}
        </View>
          <RadioGroup 
            radioButtons={radioButtons1} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
         <View style={styles.payoffview}>
                { selectedId=="2"?PayONline():null}
        </View>
        </View>
        <View style={styles.btnvieworder}>
            <TouchableOpacity style={styles.btnorder}>
                <Text>Order Now</Text>
            </TouchableOpacity>
        </View>

      
            {isConfirm&&confirmData()}
            {isOTP&&OTPConfirm()}
        
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
        
    },
    payoffview:{
        width:w,
        backgroundColor:'yellow'
    },
    addresview:{
        width:w,
        height:h*.15,
        marginTop:w*.01,
      


    },
    productview:{
        width:w,
        height:h*.25,
        marginTop:w*.01,
       
    },
    payview:{

        width:w,
        height:h*.1 ,
        marginTop:w*.01,
       

    },
    confirmView:{
        width:w,
        height:h,
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'red'
    },
    phoneView:{
        width:w,
        height:h*.3 ,
        marginTop:w*.01,
    },
 

})