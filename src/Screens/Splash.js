import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'



export default function Splash({navigation}) {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Home');
    },3000);
   }, []);
  
  return (
    <View style={styles.container}>
      <Image
          style={styles.splashLogo}
          source={require('./img/splash.webp')}
        />
        <Text style={styles.text}>Book Your Appointment</Text>
  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 backgroundColor: 'white'
  },
  splashLogo:{
   height:300,
   width:300,
  },
  text: {
    // color: 'mediumspringgreen',
    fontSize: 20,
    fontWeight:'bold',
    borderBottomColor: 'teal',
    borderBottomWidth: 2
  },
  
});


