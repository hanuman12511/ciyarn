import React, { useEffect, useState } from 'react'
import Router from './src/routes/Router'
import 'react-native-gesture-handler';
import {ContextAuth} from './src/context/Context'
import { Addtocart,productitem, orderdata} from './src/Data/data';
export default function App(){

const data ={
  Addtocart,productitem,orderdata
}

  return(
    <ContextAuth.Provider value={data}>
         <Router/>
  </ContextAuth.Provider>

  )
}