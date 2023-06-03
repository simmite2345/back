import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState } from 'react';
import axios, { Axios } from 'axios';
export default function Success({ navigation }) {

  const storedValue2 = JSON.parse(localStorage.getItem('user'));

  const [data, setData] = useState([]);

  const emailid = storedValue2.doctor.email;

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/a1/registerDoctor/${emailid}`)
     setData(res.data.doctor)
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the request
    
  }
};

fetchData();
  

  return (

    <View style={styles.container}>
      <Image
        style={styles.img}

        source={require("../img/success.jfif")}
      />
<Text>Welcome {data.fullname}</Text>
      <Text style={styles.text} >Your Registertion send Successfully to Admin after admin approve you are eligble to be a doctor in our app</Text>


      <TouchableOpacity onPress={() => {
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
  container: {
    justifyContent: 'center', alignItems: 'center',
    flex: 1,
    backgroundColor: 'white'
  },
  img: {
    height: 170,
    width: 170,

  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20
  },
  btn: {
    backgroundColor: "Grey",
    color: 'teal',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    borderWidth: 2,
    borderColor: 'teal'
  }
})