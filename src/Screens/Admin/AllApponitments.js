import { View, Text, StyleSheet,Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from "../CommonComponent/Header";
import { Avatar, Card, IconButton } from 'react-native-paper';
import CommonGo from '../CommonComponent/CommonGo';
export default function AdminPanel({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:8000/api/A1/appointment";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json)
        if (Array.isArray(json.appointments
          )) {
          setData(json.appointments);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <Header title="Admin Panel / All Appointments" />
      <CommonGo textgo={'Back'} pag={'AdminPanel'} navigation={navigation} />
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            {data.map((appointments, index) => (
        <View key={index} style={styles.box}>
            <Text style={styles.headtext}>Appointment</Text>
           <Text>Name: {appointments.name}</Text>
          <Text>Date: {appointments.date}</Text>
          <Text>Timming: {appointments.timming}</Text>
          <Text>phone: {appointments.phone}</Text>
          <Text>Age: {appointments.age}</Text>
          <Text>gender: {appointments.gender}</Text>
          <Text>Problem: {appointments.problem}</Text>
          <Text>Doctor: {appointments.doctor}</Text>
          <Text>Specialist: {appointments.specialist}</Text>
          <Text>Status: {appointments.status}</Text>
          <Text>Created Time: {appointments.createdAt}</Text> 
          {/* Render other properties of the 'doctor' object */}
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