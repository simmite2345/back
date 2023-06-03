import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from "./Screens/Splash.js"
import Home from './Screens/Home.js'
import Booking from "./Screens/Booking.js"
import Success from "./Screens/Success.js"
import CallAmub from './Screens/CallAmub.js'
import Pending from "./Screens/Pending.js"
import Completed from "./Screens/Completed.js"
import Register from './Screens/Register/Register.js'
import Forgot from './Screens/Register/Forgot.js'
import DoctorSignup from './Screens/Doctor/DoctorSignup.js'
import AfterRegister from './Screens/Doctor/AfterRegister.js'
import AllApponitments from "./Screens/Admin/AllApponitments.js"
import AllDoctors from './Screens/Admin/AllDoctors.js'
import AllUsers from './Screens/Admin/AllUsers.js'
import AllPayment from "./Screens/Admin/AllPayment.js"
import AdminPanel from './Screens/Admin/AdminPanel.js'
// import Login from './Screens/Doctor/Login.js'
// import AllApointmnet from "./Screens/Doctor/AllApointmnet.js"
// import Pendingd from './Screens/Doctor/Pending.js'
// import Payment from "./Screens/Doctor/Payment.js"
// import Completed from './Screens/Completed.js'
// import Approve from './Screens/Doctor/Approve.js'
const Stack= createNativeStackNavigator()
export default function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Splash}
          options={{headerShown:false}}                                        
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}  
        />
       <Stack.Screen
          name="Booking"
          component={Booking}
          options={{headerShown:false}}  
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{headerShown:false}}  
        />
          <Stack.Screen
          name="Pending"
          component={Pending}
          options={{headerShown:false}}  
        />
       <Stack.Screen
          name="Completed"
          component={Completed}
          options={{headerShown:false}}  
        />
        <Stack.Screen
          name="CallAmub"
          component={CallAmub}
          options={{headerShown:false}}  
        />
         <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown:false}}  
        />
          <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{headerShown:false}}  
        />
         <Stack.Screen
          name="DoctorSignup"
          component={DoctorSignup}
          options={{headerShown:false}}  
        />
         <Stack.Screen
          name="AfterRegister"
          component={AfterRegister}
          options={{headerShown:false}}  
        />
          <Stack.Screen
          name="AllApponitments"
          component={AllApponitments}
          options={{headerShown:false}}  
        />
         <Stack.Screen
          name="AllDoctors"
          component={AllDoctors}
          options={{headerShown:false}}  
        />
           <Stack.Screen
          name="AllUsers"
          component={AllUsers}
          options={{headerShown:false}}  
        />
           <Stack.Screen
          name="AllPayment"
          component={AllPayment}
          options={{headerShown:false}}  
        />
          <Stack.Screen
          name="AdminPanel"
          component={AdminPanel}
          options={{headerShown:false}}  
        />
          {/* <Stack.Screen
          name="AllApointmnet"
          component={AllApointmnet}
          options={{headerShown:false}}  
        />
         <Stack.Screen
          name="Approve"
          component={Approve}
          options={{headerShown:false}}  
        />
           <Stack.Screen
          name="Compeleted"
          component={Compeleted}
          options={{headerShown:false}}  
        />
           <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown:false}}  
        />
          <Stack.Screen
          name="Pending"
          component={Pendingd}
          options={{headerShown:false}}  
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown:false}}  
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}