import React, { useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native';
import StyleSheet from 'react-native-media-query';
export default function Register({text}) {

    //   const [name, setName]= useState("simran kushwah");
    //   const [title, setTitle]= useState("Submit to Login");
    //   const click = () => {
    //     setTitle('Submitted')
    //   }
    return (
        
        <View style={styles.pagebody} dataSet={{media: ids.pagebody}} >

            <Text style={styles.topHeading}>Sign In / {text}</Text>
            <Text style={styles.input} >Email</Text>
            <TextInput style={styles.inputf} placeholder="xyz@gmail.com" />
            <Text style={styles.input}>Password</Text>
            <TextInput style={styles.inputf} placeholder="*******" keyboardType='numeric' />
            
            <br></br>
            <Button title="Register Now" />
           
        </View>
    )
}
const {ids,styles} = StyleSheet.create({
    pagebody: {
        width: '90%',
        padding: 10,
        marginTop: 100,
        marginBottom: 70,
        borderColor: "#D5DDE5",
        borderWidth: 2,
        alignSelf: 'center',
        borderRadius: 10,
        height:'auto',
      paddingBottom:20,
        '@media (max-width: 1600px) and (min-width: 444px)': {
           
            width: "30%",
            paddingBottom:40
          },
    },
    topHeading: {
        fontSize: 25,
        margin: 10,
        padding: 10,
        fontWeight: "700",
        color: 'navy',
        borderBottomColor: "grey",
        borderBottomWidth: 0.5, justifyContent: "center", alignItems: 'center'
    },
    input: {
        margin: 10,
        color: "teal",
        fontWeight: 'bold'
    },
    inputf: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 12,

        margin: 10
    },


})