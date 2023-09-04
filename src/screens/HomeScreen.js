import React, { useContext, useEffect, useState,BackHandler } from 'react'
import {Text,View,StyleSheet,Image,Dimensions, ActivityIndicator,Button,TouchableOpacity,FlatList} from 'react-native'
import HeadderComponent from '../components/HeaderComponent'
import ImageSliderComponent from '../components/ImageSliderComponent'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
import ProductComponent from '../components/ProductComponent';
import axios from 'axios';
/* import LottieView from 'lottie-react-native'; */
import { ScrollView } from 'react-native-gesture-handler';
import {productitem} from '../Data/data'
import cart from '../images/icon/cart.png'
import { ContextAuth } from '../context/Context';


export default function HomeScreen({navigation}){

const [product,setProduct] = useState('')
const [addcart,setAddcart] = useState([])
const [isLoaded,setLoaded] = useState(false)
const [isproductid,setProductId] = useState(0)
const data = useContext(ContextAuth)

useEffect(()=>{
    
    const {productitem } = data
    
async function ProductShow(){

//const res = await axios("http://ankursingh.xyz/api/productshow.php")
//const {body} = res.data
//console.log( res.data.body);


}
    ProductShow()

console.log("****");   


},[])
function cartfunc1(){
    alert("cart func")
}
  function Header(){
        const data11={
            cartbtn:cartshow,
            nav:navigation.navigate,
            home:"bars",
            title:"Home Screen",
            cart:"shopping-cart",
            notification:"bell-o"
        }
        return <HeadderComponent  {...data11}/>
       
      }
function Slider() {
    return <ImageSliderComponent/>
}

function ProductShow(){
    return<ProductComponent/>
}

async function detailsPage(item){
    
        setProductId(item.product_id) 
        setLoaded(!isLoaded)
        setTimeout(()=>{
             navigation.navigate('details',{...item,addcart})
        
        },1000)
          
}



function renderitempage(item){

return<>  


<View style={styles.itemflat}>
     { isLoaded && item.product_id===isproductid? 
    <View style={styles.loadingview}>
    <ActivityIndicator size="large" color="#00ff00" />
    </View>
:
    <View style={styles.itemflat1}>
        <TouchableOpacity onPress={()=>detailsPage(item)}>
            <View style={styles.imageview}>
                <Image source={{uri:item.image}} style={{width:'100%',height:'100%'}}/>
            </View>
            <View style={styles.textview}>
            <Text>{item.product_name}</Text>
            </View>

        </TouchableOpacity>
    </View>
}
</View>
</>
}
function ProductShowData(product){
    return<>

    <FlatList
    numColumns={3}
    data={product}
    renderItem={({item})=>renderitempage(item)}
    keyExtractor={(item)=>item.key}
    />


    {/* product.map(d=>(<>
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
    )) */}
    </>
   
}

function cartshow(){
    navigation.navigate('addtocart')
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
        },
        itemflat:{
            
            height:h*.2,
            flex:1,
            backgroundColor:'yellow',
            margin:10,
          overflow:'hidden',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            alignItems:'center',
            justifyContent:'center'


        },
        imageview:{
            flex:1,
            height:h*.15,
            borderRadius:20,
            overflow:'hidden'
            
        },
        textview:{
            flex:1,
            padding:10
        },
        loadingview:{
            flex:1,
            zIndex:100,
            position:'absolute' , 
            },
        itemflat1:{
            height:h*.2,
            flex:1,
            backgroundColor:'yellow',
            margin:10,
          overflow:'hidden',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            alignItems:'center',
            justifyContent:'center'
        }


    

})