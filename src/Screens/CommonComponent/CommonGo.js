import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CommonGo({textgo,pag,navigation}) {
  return (
    <View>
     <TouchableOpacity onPress={()=>{
        navigation.navigate(pag)
      }}>
        <Text style={styles.btn}>
    {textgo}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    
btn:{
   
    color:'teal',
    fontWeight:'bold',
    padding:10,
   
    marginTop: 30,
   
}
})