import { View, Text, Image, Button,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Login from "./Doctor/Login"
import StyleSheet from 'react-native-media-query';
import axios, { Axios } from 'axios';

export default function Slide({navigation}) {

//   const storedValue2 = JSON.parse(localStorage.getItem('user'));

//   const [data, setData] = useState([]);
// if (storedValue2){
//   const emailid = storedValue2.doctor.email;
  
// }

// const fetchData = async () => {
//   try {
//     const res = await axios.get(`http://localhost:8000/api/a1/registerDoctor/${emailid}`)
//    setData(res.data.doctor)
//    console.log(res.data.doctor)
//    console.log(res.data)
//   } catch (error) {
//     console.error(error);
//     // Handle any errors that occurred during the request
  
// }
// };
// fetchData();

  
  return (
    <View style={styles.main}>
      <Image
        style={styles.img}
        dataSet={{ media: ids.img }}
        source={require("./img/homebanner.jpg")}
      />
      <View style={styles.contmain} dataSet={{ media: ids.contmain }}>
        <Text style={styles.topHeading}>Doctor App</Text>
        <Text style={styles.bottomHeading}>Book Your Appointment Early to Save your Golden time. </Text>
        <View style={styles.contbtn}>
          <Button
            title="Book Now !"
            color='red'
            style={styles.btn}
            accessibilityLabel="Learn more about this purple button"
          />

    {/* {!storedValue2 ?  */}
  
  <TouchableOpacity onPress={() => {
    navigation.navigate('DoctorSignup')
  }}>
    <Text style={{ color:"green",fontWeight:"bold",alignSelf:'center' }}>
     Apply for join
    </Text>
  </TouchableOpacity>
    {/* ) : (storedValue2.doctor.status == 'Request to Approve' ? (
      <TouchableOpacity >
      <Text style={{ color:"#FFAF0A",fontWeight:"bold",alignSelf:'center' }}>
      Not Approved By Admin
      </Text>
    </TouchableOpacity>) 
    : (
      <TouchableOpacity onPress={() => {
        navigation.navigate('Login')
      }}>
        <Text style={{ color:"blue",fontWeight:"bold",alignSelf:'center' }}>
         Login
        </Text>
      </TouchableOpacity>
    ) */}
   {/* )  
  }  */}
           {/* <TouchableOpacity onPress={()=>{
        navigation.navigate('AdminPanel')
      }}>
       <Text>panel</Text>
      </TouchableOpacity> */}
        </View></View>

    </View>
  )
}


const { ids, styles } = StyleSheet.create({
  main: {

    backgroundColor: 'white',
    overflow: "hidden",
    

  },
  img: {
    height: 400,
    width: '100%',

    '@media (max-width: 1600px) and (min-width: 444px)': {
      height: 500,
      width: "50%",
      position: 'relative'
    },

  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15
  },
  topHeading: {
    color: 'teal',
    fontSize: 32,
    fontWeight: 'bold'
  },
  bottomHeading: {
    color: 'grey',
    fontSize: 14,

    marginTop: 8,
    marginBottom: 19
  },
  contbtn: {
    width: 200,
paddingBottom:40
  },
  contmain: {
    justifyContent: 'center',
    alignItems: 'center',

    '@media (max-width: 1600px) and (min-width: 420px)': {
      height: 500,
      width: "100%",
      position: 'absolute',
      justifyContent: 'center',
      marginLeft: 300,

    },

  }
})