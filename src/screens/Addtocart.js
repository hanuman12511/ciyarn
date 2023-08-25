import React, { useContext, useEffect, useState } from 'react'
import {Text,View,Image,StyleSheet,Dimensions,ScrollView, TouchableOpacity} from 'react-native'

const w =Dimensions.get('screen').width
const h =Dimensions.get('window').height
import del from '../images/icon/delete.png'
import HeadderComponent from '../components/HeaderComponent'
import { ContextAuth } from '../context/Context'
import BackHeaderComponent from '../components/BackHeaderComponent'
export default function Addtocart({route,navigation}){

    
    const addcart  = useContext(ContextAuth)
    console.log("*****************");
    console.log(addcart);
    console.log("*****************");
    //const[product,setProduct] = useState(route.params)
    const[product,setProduct] = useState(addcart)
    const[totalqty,setTotalqty] = useState(0)
    const[totalpay,setTotalPay] = useState(0)
    const[id,setIndexDelete] = useState(-1)
    console.log(product);

useEffect(()=>{
    var qty=0;
    var pay=0
    function showdata(){
        product.map(d=>{
            qty+=d.qty
            pay+=d.qty*d.product_rate
        })
    }
    showdata()
    setTotalqty(qty)
    setTotalPay(pay)

},[])
useEffect(()=>{
    function show(id){
    if (id > -1) {
        addcart.splice(id, 1); 
      }
   console.log(addcart);
    }
      show(id)
      setProduct(addcart)
},[id])


function deleteItem(id){
    alert(`delete${id}`)
   setIndexDelete(id)
}

    function showCart(product,index){
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
                <TouchableOpacity onPress={()=>deleteItem(index)}>
               <Image source={del}   style={{width:40,height:40,marginRight:20}}/>
               </TouchableOpacity>
            </View>
        </View>
        </View>

    }
    function placeorderpay(){
       

        const params ={
            ...product,
            "orderid":1,
            "pay":totalpay,
            "qty":totalqty
        }
        console.log(params);
        navigation.navigate('addres',{state:params})

    }
    function PlaceOrder(){
        return<>
        <View style={styles.producttext}>
            <View style={styles.productviewqty}>
            <Text style={styles.productviewqtytext1}>Qty:</Text>
            <Text style={styles.productviewqtytext2}>{totalqty}</Text>
            </View>
            <View style={styles.productviewrate}>
            <Text style={styles.productviewqtytext1} >TotalPay:</Text>
            <Text style={styles.productviewqtytext2} >Rs.{totalpay}/-</Text>
            </View>
        </View>
        <View style={styles.productplace}>
                <TouchableOpacity onPress={placeorderpay} style={styles.placeorderbtn}>
                    <Text>PlaceOrder Now</Text>
                </TouchableOpacity>
        </View>
        </>
    }

    return(
        <>
        <View style={styles.container}>
            <BackHeaderComponent title="Cart Screen"/>
            <View style={styles.cartproduct}>
                <ScrollView>
            { product.map((pro,index)=>(
                showCart(pro,index)
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
        
        height:h*.26,
        backgroundColor:'#D6E5EB',
        position:'absolute',
        left:0,
        bottom:0,
        right:0,
        flexDirection:'row',
        borderRadius:30,
        overflow:'hidden',
        marginVertical:30,
        marginHorizontal:30
    },
    cartproduct:{
        alignItems:'center',
        width:w,
        height:h*.6,
        backgroundColor:'red',
        borderBottomEndRadius:50,
        borderBottomLeftRadius:50,

       
    },
    producttext:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    productplace:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    productviewqty:{
        flex:1,
        marginTop:20

    },
    productviewqtytext1:{
        color:"#02CFFB"
    },
    productviewqtytext2:{
      color:'#fff',
        padding:10,
      width:100,
        backgroundColor:'#02CFFB',
        marginTop:5
    },
    productviewrate:{
        flex:1
    },
    placeorderbtn:{
        padding:10,
        backgroundColor:'#fff',
        borderRadius:15,
        marginRight:10,
    }
})