import React, { useEffect, useState } from 'react'
import {Text,View,StyleSheet,Image,Dimensions, TouchableOpacity} from 'react-native'
import HeadderComponent from '../components/HeaderComponent'
import ImageSliderComponent from '../components/ImageSliderComponent'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
import ProductComponent from '../components/ProductComponent';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import {productitem} from '../Data/data'
export default function HomeScreen({navigation}){

const [product,setProduct] = useState('')
const [addcart,setAddcart] = useState([])

useEffect(()=>{
    
async function ProductShow(){

const res = await axios("http://ankursingh.xyz/api/productshow.php")
//const {body} = res.data
console.log( res.data.body);
setProduct(productitem)
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
    {product.map(d=>(<>
        <View style={styles.product} >
            <TouchableOpacity onPress={()=>navigation.navigate('details',{...d,addcart})}>
                <View style={styles.product1}>
                <View style={styles.image}>
                    <Image source={{uri:d.image}} style={{width:'100%',height:'100%'}}/>
                </View>
                <View style={styles.producttext}>
                <Text>Product:{d.product_name}</Text>
                <Text>Rs.{d.product_rate}/-</Text>
                </View>
                </View>
        </TouchableOpacity>

        </View>
            </>
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
           <View style={styles.container1}>
            <ScrollView style={styles}>
            {
            product!==''?
                       ProductShowData(product)
            :<Text>Not Product</Text>
            }

            </ScrollView>
           </View>

        </View>
        </>
    )
}
const styles =StyleSheet.create({
    container1:{
        height:h*.5,
        backgroundColor:'green'
    },
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
    image:{
        width:150,
        height:"100%",
        backgroundColor:'blue'
    },
    product:{
        width:w,
        height:200,
        justifyContent:'center',
        alignItems:'center',
       
        
        
    },
    product1:{
        width:w*.95,
        height:180,
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:20,
        overflow:'hidden'
    },
    scrollview:{
        width:w,
        height:h*.3,
        backgroundColor:'green'
    }
   ,
   producttext:{
        flex:1,
        height:'100%',
        padding:15,
        }

    

})