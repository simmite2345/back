import { View, Text, Dimensions,StyleSheet, KeyboardAvoidingView,Platform} from 'react-native'
import React from 'react'

export default function FormContainer({children}) {
  return (
    <View>
        <KeyboardAvoidingView enabled behaviour={Platform.OS === 'ios' ? "padding" : null} style={styles.container}>

       {children}
        </KeyboardAvoidingView >
    </View>
  )
}

const styles = StyleSheet.create({
    container:{ paddingHorizontal:20 ,width: Dimensions.get('window').width,height:"fit-content"}
})