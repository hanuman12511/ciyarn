
import React, { useEffect, useState } from 'react'
import {Text,View,Image,StyleSheet,Dimensions, TouchableOpacity} from 'react-native'
import { create } from 'react-test-renderer';
import add from '../images/icon/add.png'
import sub from '../images/icon/sub.png'
import cart from '../images/icon/cart.png'
const w=Dimensions.get('window').width
const h=Dimensions.get('window').height
export default function Details({route,navigation}){

    const [product,setProduct] = useState(route.params)
    const [qty,setQty] = useState(1)
    const [amount,setAmount] = useState(product.product_rate)
    const [totalpay,setTotalpay] = useState('')

    useEffect(()=>{
        function Data(totalpay,qty){
            setTotalpay(totalpay*qty)
        }
        Data(amount,qty)
    },[amount,qty])

  
   function subqty(){
   
    var q =qty
    if(q>1)
    setQty(--q)
   
   }
   function addqty(){
   
    var q =qty
    if(q<10)
    setQty(++q)

   }
   function addToCart(){
    alert("add tocart")
    const params = {
        ...product,
        "cartid":product.product_id,
        "qty":qty,
        "totalpay":totalpay,
        "userId":1
       
    }

    var cart = product.addcart 
    cart.push(params)

    
navigation.navigate("addtocart",cart)
   }
    console.log(product);
    return(
       <>
       <View style={styles.container}>
            <View style={styles.header}>

            </View>
            
            <View style={styles.details}>
                <View style={styles.viewimage}>
                    <Image source={{uri:product.image}} style={styles.image}/>

                </View>
                <View style={styles.textdata}>
                    <View style={styles.producttext}>
                        <Text style={styles.productname}>{product.product_name}</Text>
                        <Text style={styles.productrate}>Rs.{product.product_rate}/-</Text>
                    </View>
                    <View style={styles.qtyview}>
                        <Text style={styles.qtytext}>Qty:</Text>
                        <View style={styles.qtychangeview}>
                            <TouchableOpacity  onPress={subqty}>
                            <Image source={sub} style={styles.imageadd}/>
     
                            </TouchableOpacity>
                            
                            <Text style={styles.qtytext1}>{qty}</Text>
                            
                            <TouchableOpacity onPress={addqty}>
                            <Image source={add} style={styles.imageadd}/>
     
                        
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.addtocart}>
                    <Text style={styles.totalpay}> Rs.{totalpay}/-</Text>
                   
                    <TouchableOpacity style={styles.cartbtn} onPress={addToCart}>
                    <View style={styles.cartview}>
                    <Image source={cart} style={styles.cartimage}/>
                    </View>
                    </TouchableOpacity>
                   
                </View>
            </View>
            
            <View style={styles.footer}>

            </View>
       </View>

       </>
    )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#09F4B5"
    },
    header:{
        flex:1,
        backgroundColor:"#0953F4"
    },
    details:{
        flex:9,
        backgroundColor:"#C5D5F8",
        alignItems:'center'
        
    },
    viewimage:{
        width:w*.9,
        height:h*.4,
        backgroundColor:'#05C5EF',
        borderRadius:20,
        overflow:'hidden'
        
    },
    image:{
       width:'100%',
       height:'100%'
        
    },
    textdata:{
        width:w*.9,
        height:h*.2,
        backgroundColor:'#05C5EF',
        borderRadius:20,
        marginTop:10,overflow:'hidden'
    },
    producttext:{
        width:'100%',
        height:70,
        flexDirection:'row',
        paddingHorizontal:10
       
    },
    addtocart:{
        width:w*.9,
        height:h*.1,
        backgroundColor:'#05C5EF',
        borderRadius:20,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
    },
    footer:{
        flex:1,
        backgroundColor:"#011236"
    },
    productname:{
        flex:1,
        color:'#000000',
        padding:10,
        fontSize:20
    },
    productrate:{
        flex:1,
        color:'#000000',
        padding:10,
        textAlign:'right',
        fontSize:20

    },
    qtyview:{
        flex:1,
       
        flexDirection:'row'
    },
    qtychangeview:{
        flex:1,
        flexDirection:'row',
        marginRight:50

    },
    qtytext:{
        flex:3,
        fontSize:20,
        textAlign:'left',
        color:'#fff',
        marginLeft:25
       
    },
    qtytext1:{
        fontSize:20,
        textAlign:'center',
        color:'#fff',
        paddingHorizontal:10,
        
       
    },

    imageadd:{
        width:30,
        height:30
    },
    totalpay:{
        padding:20,
        fontSize:18,
        color:'#fff',
        flex:2
    },
    cartimage:{
        width:30,
        height:30,
        marginRight:30
    },
    cartbtn:{
        flex:1,
    },
    cartview:{
        flex:1,
        alignItems:'flex-end',
        backgroundColor:'#fff',
       
        borderRadius:20,
        justifyContent:'center',
       
    }
})