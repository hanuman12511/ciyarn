import React from 'react'
import {Text,View,StyleSheet,Image,Dimensions} from 'react-native'
import HeadderComponent from '../components/HeaderComponent'
import ImageSliderComponent from '../components/ImageSliderComponent'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
import ProductComponent from '../components/ProductComponent';
export default function HomeScreen(){
  function Header(){
        return <HeadderComponent/>
      }
function Slider() {
    return <ImageSliderComponent/>
}

function ProductShow(){
    return< ProductComponent/>
}
 return(
        <>
        <View style={styles.container}>
            {Header()}
            {Slider()}
          
            <View style={styles.product_List}>
                <Text style={styles.home_product_text}>
                    Product
                </Text>
                <Text style={styles.home_text_seeall}>
                    See All
                </Text>
            </View>
            <View style={styles.product_List_show}>
                {ProductShow()}
            </View>
           
        </View>
        </>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"yellow"
    },
    home_product_text:{
        width:w*.5,
        fontSize:20,
    },
    home_text_seeall:{
        width:w*.4,
        fontSize:16,
        textAlign:'right',
   
    },
    product_List:{
        width:w,
        backgroundColor:'white',
        padding:10,
        flexDirection:'row'
        
    },
   

    

})