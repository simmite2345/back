import React  from "react";
import { Text ,View, StyleSheet,TouchableOpacity} from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
  
const CreateCard = ({title,content,navigation,page}) => {
      
    return(
        <Card style={Styles.container}>
        <Card.Content>
            <Title style={Styles.ctext}>{title}</Title>
        </Card.Content>
       
       <Card.Content>
        <Paragraph style={Styles.ctext}>{content}</Paragraph>
        </Card.Content>
        <Card.Actions>
        <TouchableOpacity onPress={()=>{
        navigation.navigate(page)
      }}>
        <Text style={Styles.btn}>
            Click to View
        </Text>
      </TouchableOpacity>
        </Card.Actions>
      </Card>
         
    )
}
export default CreateCard;
  
const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:37,
        backgroundColor:"teal",
    },
    ctext:{
        color:"white"
    },
    btn:{
        backgroundColor:"white",
        color:'blue',
        fontWeight:'bold',
        padding:10,
        borderRadius:10,
        marginTop: 30,
        borderWidth: 2,
        borderColor: 'teal'
    }
})