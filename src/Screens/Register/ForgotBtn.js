import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ForgotBtn({navigation}) {
  return (
    <>
    <TouchableOpacity onPress={()=>{navigation.navigate('Forgot')}}>
        <Text style={{color:'grey',fontWeight:"bold", alignSelf:"center",marginBottom:20}}>
            Forgot Your Password?
            </Text>
        </TouchableOpacity> 
  </>
  )
}