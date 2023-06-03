import React from 'react'
import { StyleSheet, Text, View,  } from 'react-native';
import AppNavigator from './src/AppNavigator';
import Booking from './src/Screens/Booking';
import Success from "./src/Screens/Success"
import AfterRegister from "../DocterApp/src/Screens/Doctor/AfterRegister"
import Login from './src/Screens/Admin/Login'
import DoctorPanal from './src/Screens/Doctor/DoctorPanel';
import AdminPanel from './src/Screens/Admin/AdminPanel';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AfterRegister/> */}
      <AppNavigator/>
{/* <DoctorPanal /> */}
{/* <AdminPanel/>  */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});
