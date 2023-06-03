import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import FormBtn from './FormBtn'
import ForgotBtn from './ForgotBtn'
import axios, { Axios } from 'axios';
// import Client from "../api/Clint"
const isValidObjectField = (obj) => {
  return Object.values(obj).every(value => value.trim() )
}

const updateError = (error,stateUpdater) =>{

  stateUpdater(error);

  setTimeout(()=>{
    stateUpdater('');
  },2500)
}

const isValidEmail = (value) =>{
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(value)
}

export default function SignUp({navigation}) {
const [userInfo, setUserInfo]= useState({
  fullname: '',
  email: '',
  password:'',
  confirmPassword:''
})

const [error, setError]= useState('')

const {fullname, email, password, confirmPassword} = userInfo

const handleOnChangeText = (value, fieldName)=>{

  setUserInfo({...userInfo,[fieldName]:value})

}

const isValidForm = () =>{
 if (!isValidObjectField(userInfo)) return updateError('Required All Fields!', setError)
 
 if (!fullname.trim() || fullname.length<3) return updateError('Invalid Name', setError)

 if (!isValidEmail(email)) return updateError("invalid email!", setError)

 if (!password.trim() || password.length < 8) return updateError(" password is more than 8 character!", setError)

 if (password !== confirmPassword ) return updateError(" password does not match", setError)

 return true
}

// const payload = { ...userInfo };
// const sumbitForm = async () => {
//   if (isValidForm()) {
//     console.log(userInfo);

//     try {
//       const res = await axios.post('http://localhost:8000/api/a1/register', payload);
//       console.log(res.data);
//       // Handle the response from the backend as needed

//       // Assuming the response from the server contains a success message and an ID for the newly created user
//       const { message, userId } = res.data;

//       if (message === 'success') {
//         // Save the user ID or perform any other actions on success
//         console.log('User created with ID:', userId);
//       } else {
//         // Handle any other error messages from the server
//         console.log('Registration failed:', message);
//       }
//     } catch (error) {
//       console.error(error);
//       // Handle any errors that occurred during the request
//     }
//   }
// };



const payload = { ...userInfo };

const sumbitForm = async () => {
  if (isValidForm()) {
    console.log(userInfo);

    try {
      const res = await axios.post('http://localhost:8000/api/a1/register', payload);
      console.log(res.data);

      // Assuming the response from the server contains a success field and an ID for the newly created user
      const { success, userId } = res.data;

      if (success) {
        // Save the user ID or perform any other actions on success
        console.log('User created with ID:', userId);
        // navigation.navigate('AdminPanel');
      } else {
        // Handle registration failure
        console.log('Registration failed');
      }
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the request
    }

  }
};



// const SignUp = async () =>{
//   if (isValidForm()) {
//   try {
//     const res = axios.post('http://localhost:8000/api/a1/register',{

//       ...userInfo
//     });
//     console.log(res.data);
//     // Handle the response from the backend as needed
//   } catch (error) {
//     console.error(error);
//     // Handle any errors that occurred during the request
//   }
//  }}

  return (
    <FormContainer onSubmit={SignUp}>
      {error ? <Text style={{color:'red',fontSize: 18,textAlign:"center"}}>{error}</Text>:null}
      <FormInput value={fullname} onChangeText={(value) => handleOnChangeText(value,'fullname')} label="Full Name" placeholder="e.g. john" />
      <FormInput value={email} onChangeText={(value) => handleOnChangeText(value,'email')} autoCapitalize="none" label="Email" placeholder="email@gmail.com" />
      <FormInput value={password} onChangeText={(value) => handleOnChangeText(value,'password')} autoCapitalize="none" secureTextEntry={true} label="Password" placeholder="******" />
      <FormInput value={confirmPassword} onChangeText={(value) => handleOnChangeText(value,'confirmPassword')} autoCapitalize="none" secureTextEntry={true} label="Confirm Password" placeholder="******" />
      <ForgotBtn navigation={navigation} />
      <FormBtn onPress={sumbitForm} label="Sign Up" />
    </FormContainer>
  )
}
