import React, { useState } from 'react'
import {Text,View,StyleSheet,TouchableOpacity,TextInput,Dimensions} from 'react-native'
const w= Dimensions.get('screen').width
const h= Dimensions.get('screen').height
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function AddAddres(props){
    const[addresdetails,setAddresDetails] = useState([])
    
function addaddresdata(){
    const {addaddres} =props.route.params
    const{data,details} =addresdetails
    addaddres(data.description)
    props.navigation.goBack()
}


    return(
        <>
        <View style={styles.container}>
            <View style={styles.viewText}>

                    <Text style={styles.textname}>Enter Addres:</Text>
            </View>
            
            <View style={styles.viewinput}>
                  <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    console.log(data, details);
                    setAddresDetails({data,details})
                    }}
            query={{
                key: 'AIzaSyBb3j8Aiv60CadZ_wJS_5wg2KBO6081a_k',
                language: 'en',
            }}
          
           /*  query={{
                key: 'AIzaSyBb3j8Aiv60CadZ_wJS_5wg2KBO6081a_k',
                language: 'hi',
                components: 'country:Ind',
                fields: 'geometry',
              }} */
           
           
    />
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
       height:h*.3,
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