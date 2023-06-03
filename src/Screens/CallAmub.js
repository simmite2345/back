import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './CommonComponent/Header'
import CommonBtn from './CommonComponent/CommonBtn'
import CommonGo from './CommonComponent/CommonGo'
export default function CallAmub() {
  return (
    <View>
      <Header icon={require('./img/images.png')} title={'Call Ambulance'} />
      <CommonGo/>
      <Text style={styles.heading}>Enter Your Current Address</Text>

      <TextInput style={styles.nameInput} placeholder='Address' />
      <View style={styles.btn}><CommonBtn

w={100} h={40} txt={'Call Now'}

onClick={() => {

}}
status={true}
/></View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 42,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 'bold'
  },
  timeSlot: {
    height: 40,
    width: '45%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    margin: 10,
    padding: 8,
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: '94%',
    heigth: 65,
    alignSelf: 'center',
    borderWidth: 1,
    paddingLeft: 10,
    padding: 10
  },
  btn:{
    alignSelf:'center',
    marginTop:30,
    width:'50%',
  }
})