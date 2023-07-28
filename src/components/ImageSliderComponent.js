import React from 'react'
import {View,Image,StyleSheet,Dimensions} from 'react-native'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
export default function ImageSliderComponent(){
    return(
        <>
          <View>
                <Image source={require('../images/food/food.png')} style={styles.banner}/>
            </View>
        </>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"yellow"
    },
   
    banner:{
        width:w,
        height:h*.3
    }

})