import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Success({navigation}) {
  return (
    <View style={styles.container}>
         <Image
        style={styles.img}
     
        source={require("./img/success.jfif")}
      />
      <Text style={styles.text} >Your Appointment Successfully Booked</Text>


      <TouchableOpacity onPress={()=>{
        navigation.navigate('Home')
      }}>
        <Text style={styles.btn}>
            Go to Home
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{ justifyContent: 'center',  alignItems:'center',
    flex:1,
    backgroundColor:'white'
    },
    img:{
        height:170,
        width:170,

    },
text:{
    fontSize:18,
    fontWeight:'bold'
},
btn:{
    backgroundColor:"Grey",
    color:'teal',
    fontWeight:'bold',
    padding:10,
    borderRadius:10,
    marginTop: 30,
    borderWidth: 2,
    borderColor: 'teal'
}
})