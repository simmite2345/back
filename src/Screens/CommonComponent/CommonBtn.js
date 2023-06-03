import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function CommonBtn({w,h,txt,nav,status}) {


  return (

      <View>
      {status ? (<TouchableOpacity onPress={() => { nav();}}><View style={styles.btn}> <Text style={{width: w, heigth: h,color:'white'}}>{txt}</Text></View></TouchableOpacity>) 
          : (<TouchableOpacity><View  style={styles.btn2}><Text style={{width: w, heigth: h, opacity: 0.5,color:"grey"}}>{txt}</Text></View></TouchableOpacity>)}
    
     </View>
  )
}



const styles = StyleSheet.create({
  btn:{
    backgroundColor:'teal',
    color:'white',
    fontWeight:'bold',
    borderRadius:10,
    padding:5,
    borderWidth: 2,
    borderColor: 'teal',
    justifyContent:"center",
    alignItems:'center'
},
btn2:{
  backgroundColor:'gainsboro',
  color:'teal',
  fontWeight:'bold',
  borderRadius:10,
padding:5,
  borderWidth: 2,
  borderColor: 'gainsboro'
}
})

