import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import FormContainer from './FormContainer'
import { TextInput } from 'react-native-web'
import FormInput from './FormInput'
import FormBtn from './FormBtn'
import { useState } from 'react'
import ForgotBtn from './ForgotBtn';
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

export default function Forgot({navigation}) {

  const [userInfo, setUserInfo]= useState({
   
    email: '',
  
    
  })
  
  const [error, setError]= useState('')
  
  const { email} = userInfo
  
  const handleOnChangeText = (value, fieldName)=>{
  
    setUserInfo({...userInfo,[fieldName]:value})
  
  }
  
  const isValidForm = () =>{
   if (!isValidObjectField(userInfo)) return updateError('Empty Fields!', setError)
  
   if (!isValidEmail(email)) return updateError("invalid email!", setError)
  
  
   return true
  }
  
  const sumbitForm = () =>{
    if (isValidForm()) {
      
  
      console.log(userInfo)
    }
  }






  return (
    <View style={styles.container}>
         <Image
        style={styles.img}
     
        source={require("../img/forgot.png")}
      />



<FormContainer>
      {error ? <Text style={{color:'red',fontSize: 18,textAlign:"center"}}>{error}</Text>:null}
      <Text style={styles.text} >When you reset your password, you want to make sure that the email you’re receiving is secure</Text>
   <FormInput value={email} onChangeText={(value) => handleOnChangeText(value,'email')} autoCapitalize="none"placeholder="email@gmail.com" />
 
   <ForgotBtn navigation={navigation} />
   <FormBtn onPress={sumbitForm} label="Send Email"/>


   
    </FormContainer>


    
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
    backgroundColor:'white',
    padding:20
    },
    img:{
        height:200,
        width:200,

    },
text:{
    fontSize:14,
    fontWeight:'bold',
    justifyContent:"center",
    alignItems:"center",
    color:"grey",
    paddingLeft:10,
  paddingBottom:30,
  paddingTop:30
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