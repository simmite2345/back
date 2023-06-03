import { View, Text, StyleSheet, Touchable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../CommonComponent/Card'
import Header from '../CommonComponent/Header'

export default function AdminPanel({ navigation }) {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const url = "http://localhost:8000/api/a1/doctor";

  // useEffect(() => {
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       console.log(json)
  //       if (Array.isArray(json.doctor)) {
  //         setData(json.doctor);
  //       } else {
  //         console.error("Invalid response format. Expected an array.");
  //       }
  //     })
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <View>
       <Header title={'Doctor Control Panel'} />
       
      <ScrollView>
        <Card title={'All Appointment'} content={'See all appointment in this card menu bar.'}  navigation={navigation} page={'AllApointmnet'} />
        <Card title={'Pending'} content={'See pending in this card menu bar.'}  navigation={navigation} page={'Pending'} />
        <Card title={'Compeleted'} content={'See compeleted in this card menu bar.'}  navigation={navigation} page={'Compeleted'} />
        <Card title={'Approved'} content={'See approved in this card menu bar.'}  navigation={navigation} page={'Approve'} />
       <Card title={'All Payments'} content={'See all payments in this card menu bar.'}  navigation={navigation} page={'Payment'} />
      </ScrollView>

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
});