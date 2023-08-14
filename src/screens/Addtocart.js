import React, { useState } from 'react'
import {Text,View,Image,StyleSheet,Dimensions,ScrollView} from 'react-native'

const w =Dimensions.get('screen').width
const h =Dimensions.get('window').height
import del from '../images/icon/delete.png'
import HeadderComponent from '../components/HeaderComponent'
export default function Addtocart({route}){

    const[product,setProduct] = useState(route.params)
    console.log(product);

    function showCart(product){
       return <View style={styles.cartView}>
        <View style={styles.cartView_image}>
            <Image source={{uri:product.image}}  style={{width:'100%',height:'100%'}}/>
        </View>
        
        <View style={styles.cartView_text}>
             <View style={styles.cartView_text1}>
                <Text style={styles.product_name}>Product:{product.product_name}</Text>
                <Text style={styles.product_rate}>Rs.:{product.product_rate}</Text>
            </View>
            <View style={styles.cartView_delete}>
                <Text style={styles.product_qty}>Qty:{product.qty}</Text>
               <Image source={del}  style={{width:40,height:40,marginRight:20}}/>
     
            </View>

        </View>
        </View>

    }

    function PlaceOrder(){
        return<>
        <View style={styles.producttext}>

        </View>
        <View style={styles.productplace}>

        </View>
        </>
    }

    return(
        <>
        <View style={styles.container}>
            <HeadderComponent/>
            <View style={styles.cartproduct}>
                <ScrollView>
            { product.map(pro=>(
                showCart(pro)
            ))
           
            }
            </ScrollView>
            </View>
            <View style={styles.placeorder}>
                {PlaceOrder()}
            </View>
        </View>
        </>
    )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'gray',
       alignItems:'center'
    },
    cartView:{
        width:w*.9,
        height:h*.15,
        backgroundColor:'#fff',
        borderRadius:20,
        flexDirection:'row',
        overflow:'hidden',
        marginTop:10
     
    },
    cartView_image:{
        flex:1,
       
        backgroundColor:'red'
    },
    cartView_text:{
        flex:2,
        alignItems:'center'
    },
    cartView_text1:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:8
    },
    cartView_delete:{
        flex:1,
       flexDirection:'row',
        backgroundColor:'#02CFFB',
        alignItems:'center',
        borderRadius:20,
        marginHorizontal:10,
        marginBottom:10
       
    },
    product_name:{
        flex:2
    },
    product_qty:{
        flex:1,
        color:'#fff',
        marginLeft:20
    },
    product_rate:{
        flex:1,
        marginLeft:20
    },
    placeorder:{
        width:w,
        height:h*.26,
        backgroundColor:'#D6E5EB',
        position:'absolute',
        left:0,
        bottom:0,
        right:0,
        flexDirection:'row'
    },
    cartproduct:{
        alignItems:'center',
        width:w,
        height:h*.6,
        backgroundColor:'red',
       
    },
    producttext:{
        flex:1,
        backgroundColor:'green'

    },
    productplace:{
        flex:1,
        backgroundColor:'pink'

    }
})