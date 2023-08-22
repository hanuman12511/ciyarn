import React, { useState,useEffect } from 'react'
import {Text,View,StyleSheet,TouchableOpacity,TextInput,Dimensions, PermissionsAndroid} from 'react-native'
const w= Dimensions.get('screen').width
const h= Dimensions.get('screen').height
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';

export default function AddAddres(props){

console.log("***********************");
  console.log(props);
  
console.log("***********************");
    const[addresdetails,setAddresDetails] = useState([])
    const [
        currentLongitude,
        setCurrentLongitude
      ] = useState('...');
      const [
        currentLatitude,
        setCurrentLatitude
      ] = useState('...');
      const [
        locationStatus,
        setLocationStatus
      ] = useState('');

      
      useEffect(() => {
        const requestLocationPermission = async () => {
          if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: 'Location Access Required',
                  message: 'This App needs to Access your location',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                getOneTimeLocation();
                subscribeLocationLocation();
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        requestLocationPermission();
        return () => {
          Geolocation.clearWatch(watchID);
        };
      }, []);


      const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
          //Will give you the current location
          (position) => {
            setLocationStatus('You are Here');
    
            //getting the Longitude from the location json
            const currentLongitude = 
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
            
            //Setting Longitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            timeout: 30000,
            maximumAge: 1000
          },
        );
      };
    
      const subscribeLocationLocation = () => {
      var  watchID = Geolocation.watchPosition(
          (position) => {
            //Will give you the location on location change
            
            setLocationStatus('You are Here');
            console.log(position);
    
            //getting the Longitude from the location json        
            const currentLongitude =
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
    
            //Setting Latitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };



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