import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginCommon from "../CommonComponent/LoginCommon"
export default function Login({navigation}) {
  return (
    <View>
        <TouchableOpacity onPress={()=>{
        navigation.navigate('DoctorPanel')
      }}>
       <Text>panel</Text>
      </TouchableOpacity>
     <LoginCommon text='Doctor'/>
    </View>
  )
}