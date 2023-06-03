import { View, Text,StyleSheet,TextInput} from 'react-native'
import React from 'react'

export default function FormInput(props) {
  const {placeholder,label} = props
  return (
    <>
     <Text style={{fontWeight:"bold",color:"grey"}}>{label}</Text>
     <TextInput {...props}
     placeholder={placeholder}
     style={styles.input}
     />
    </>
  )
}

const styles = StyleSheet.create({
    input:{borderWidth:1, borderColor:'lightgrey',heigth:65,borderRadius:8,fontsize:16,paddingLeft:10,padding:10,marginBottom:20,}
})