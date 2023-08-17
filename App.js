import React from 'react'
import Router from './src/routes/Router'
import 'react-native-gesture-handler';
import {ContextAuth} from './src/context/Context'
import { Addtocart } from './src/Data/data';
export default function App(){
  return(
    <ContextAuth.Provider value={Addtocart}>
         <Router/>
  </ContextAuth.Provider>

  )
}