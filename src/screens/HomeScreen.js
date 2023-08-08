import React, { useEffect, useState } from 'react'
import {Text,View,StyleSheet,Image,Dimensions} from 'react-native'
import HeadderComponent from '../components/HeaderComponent'
import ImageSliderComponent from '../components/ImageSliderComponent'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
import ProductComponent from '../components/ProductComponent';
import axios from 'axios';
export default function HomeScreen(){

const [product,setProduct] = useState('')

useEffect(()=>{
    
async function ProductShow(){

const res = await axios("http://ankursingh.xyz/api/productshow.php")
//const {body} = res.data
console.log( res.data.body);
setProduct(res.data.body)
}
    ProductShow()
},[])


  function Header(){
        return <HeadderComponent/>
      }
function Slider() {
    return <ImageSliderComponent/>
}

function ProductShow(){
    return<ProductComponent/>
}

function ProductShowData(product){
    return<>
    {product.map(d=>(
        <Text>{d.product_name}</Text>
    ))}
    </>
   
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
           {/*  <View style={styles.product_List_show}>
                {ProductShow()}
            </View> */}
           <View>
            {
            product!==''?
                       ProductShowData(product)
            :<Text>Not Product</Text>
            }

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