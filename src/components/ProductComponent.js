import React from 'react'
import {Text,View,StyleSheet,Image,Dimensions} from 'react-native'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
import {product} from '../Data/data'
export default function ProductComponent(){
  
function ProductShow(){
    return<>
        {   
        product.map(d=>(
            <>
            <Text style={styles.product_text}>{d.name}</Text>
            <Image source={d.image} style={styles.image}/>
            </>
         ))
        }  
    </> 
}

    return(
        <>
         <View style={styles.product_List_show}>
                {ProductShow()}
            </View>
         </>
    )
}
const styles =StyleSheet.create({
    product_List_show:{
        width:w,
        backgroundColor:'gray' 
    }
    ,
    product_text:{
        color:'white',
        fontSize:16,
        padding:10
    }
    ,
    image:{
        width:w*.1,
        height:h*.1
    }

    

})