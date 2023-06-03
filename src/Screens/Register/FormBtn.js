import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'


export default function FormBtn({label,onPress}) {
  return (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={{fontSize:18,color:'white'}}>{label}</Text>
  </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container:{
        height:45,
        backgroundColor:"navy",
        borderRadius: 30,
        justifyContent:'center',
        alignItems:"center",
      
    }
})