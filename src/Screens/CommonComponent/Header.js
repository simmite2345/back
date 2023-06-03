import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({title, icon}) => {
  return (
    <View style={styles.header}>
     <TouchableOpacity style={styles.backBtn} underLayColor="red">
      <Image style={styles.logo} source={icon}/>
      </TouchableOpacity>
        {/* <Image style={styles.logo} source={icon}/> */}
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header


const styles= StyleSheet.create({
    header: {
      backgroundColor:'white',
      borderBottomColor:'lightsteelblue',
      borderBottomWidth:1,
     
    },
    text: {
        color:"teal",
        fontSize: 15,
        fontWeight:'bold',
        marginBottom:10,
        marginLeft:12
      
    },
    logo:{
        height: 50,
        width: 50,
        marginTop:10,
        marginLeft:10
    }
})