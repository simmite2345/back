import { View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import FormContainer from './FormContainer'
import { TextInput } from 'react-native-web'
import FormInput from './FormInput'
import FormBtn from './FormBtn'
import { useState } from 'react'
import ForgotBtn from './ForgotBtn';
import axios, { Axios } from 'axios';
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

export default function Login({navigation}) {

  const [userInfo, setUserInfo]= useState({
   
    email: '',
    password:'',
    
  })
  
  const [error, setError]= useState('')
  
  const { email, password} = userInfo
  
  const handleOnChangeText = (value, fieldName)=>{
  
    setUserInfo({...userInfo,[fieldName]:value})
  
  }
  
  const isValidForm = () =>{
   if (!isValidObjectField(userInfo)) return updateError('Empty Fields!', setError)
  
   if (!isValidEmail(email)) return updateError("invalid email!", setError)
  
   if (!password.trim() || password.length < 8) return updateError(" password is more than 8 character!", setError)
  
  
   return true
  }
  
  const payload = { ...userInfo };

  const sumbitForm = async () => {
    if (isValidForm()) {
      console.log(userInfo);
  
      try {
        const res = await axios.post('http://localhost:8000/api/a1/login', payload);
        console.log(res.data.user);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        // Assuming the response from the server contains a success field and a user token
        const { success, userId} = res.data;
        if (success) {
          // Save the user token or perform any other actions on successful login
          console.log('User logged in with token:', userId);
          // navigation.navigate('AdminPanel');
      const us = JSON.parse(localStorage.getItem('user'))
if (us.role== 'user') {
  navigation.navigate('Booking');
} else {
  navigation.navigate('AdminPanel');
}
          // Redirect to the home screen or perform any other navigation
        } else {
          // Handle login failure
          console.log('Login failed');
        }
      } catch (error) {
        console.error(error);
        // Handle any errors that occurred during the request
      }
 
    }
  };
  
  

  return (
   <FormContainer>
      {error ? <Text style={{color:'red',fontSize: 18,textAlign:"center"}}>{error}</Text>:null}
   <FormInput value={email} onChangeText={(value) => handleOnChangeText(value,'email')} autoCapitalize="none" label="Email" placeholder="email@gmail.com" />
   <FormInput value={password} onChangeText={(value) => handleOnChangeText(value,'password')} autoCapitalize="none" secureTextEntry={true} label="Password" placeholder="******" />
   
   <ForgotBtn navigation={navigation} />
   <FormBtn onPress={sumbitForm} label="Login"/>


    </FormContainer>
  )
}

