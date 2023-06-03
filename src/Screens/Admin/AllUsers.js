import { View, Text, StyleSheet,Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from "../CommonComponent/Header";
import { Avatar, Card, IconButton } from 'react-native-paper';
import CommonGo from '../CommonComponent/CommonGo';

export default function AdminPanel({navigation}) {





  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:8000/api/a1/users"

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json)
        if (Array.isArray(json.user)) {
          setData(json.user);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);




  const sumbitForm = () => {

    console.log('update')
  
  }


  return (
    <View>
      <Header title="Admin Panel / All Users" />
      <CommonGo textgo={'Back'} pag={'AdminPanel'} navigation={navigation} />
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            {data.map((users, index) => (
        <View key={index} style={styles.box}>
            <Text style={styles.headtext}>Users</Text>
          <Text>Name: {users.fullname}</Text>
          <Text>Email: {users.email}</Text>
          <Text>password: {users.password}</Text>
          <Text>Role: {users.role}</Text>
          <Text>Created Time: {users.createdAt}</Text>
          <Button
  title={users.role}
  color={users.role=='user'?'blue':'red'}
  accessibilityLabel="Learn more about this purple button"
onPress={sumbitForm}
/>
        </View>
      ))}
          </View>)}
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  box:{
    borderColor:'grey',
    borderWidth:2,
    borderRadius:10,
    padding:10,
    margin:10
  },
  headtext:{
    borderBottomColor:"grey",
    borderBottomWidth:1
  }
});