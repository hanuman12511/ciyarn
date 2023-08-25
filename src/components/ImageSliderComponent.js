import React from 'react'
import {View,Image,StyleSheet,Dimensions} from 'react-native'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
import { SliderBox } from "react-native-image-slider-box";
export default function ImageSliderComponent(){

    const image = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",]
    return(
        <>
          <View>
               {/*  <Image source={require('../images/food/food.png')} style={styles.banner}/>
             */}
             <SliderBox images={image} />
             </View>
        </>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
      
    },
   
    banner:{
        width:w,
        height:h*.3
    }

})