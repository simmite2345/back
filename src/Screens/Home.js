import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import Header from "./CommonComponent/Header.js"
import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import Slide from './Slide.js'
// import Category from './Category.js'
import CommonBtn from './CommonComponent/CommonBtn.js'


export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:8000/api/a1/doctor";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        // console.log(json)
        if (Array.isArray(json.doctor)) {
          setData(json.doctor);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <ScrollView>
      <View>

        <Header title="Doctor App" icon={require('./img/logo.png')} />



        <View style={{ backgroundColor: "white", display: "flex", justifyContent: "flex-end", flexDirection: "row" }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Register')
          }}>
            <Text style={{ paddingRight: 5, color: "blue", fontWeight: "bold" }}>
              Register
            </Text>
          </TouchableOpacity>||
          <TouchableOpacity onPress={() => {
            navigation.navigate('Register')
          }}>
            <Text style={{ color: "navy", paddingRight: 20, paddingLeft: 5, fontWeight: "bold" }}>
              Login
            </Text>
          </TouchableOpacity>

        </View>
        <Slide navigation={navigation} />
        {/* <Category/> */}

        <View style={styles.category}>
          <Text style={styles.heading}>Select Category</Text>
          <View>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index}) => {
                return (
                  <TouchableOpacity>
                  
                      <Text style={styles.buttonText}>
                     
                        
                        <Text>specialist:{item.specialist}</Text>
                    
             
                      </Text>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </View>
        {/* {data.map((post) => (
                      <View key={post.id}>
                        <Text>{post.fullname}</Text>
                        <Text>{post.specialist}</Text>
                      </View>
                    ))} */}
        {/* top doctor */}

        <View style={styles.topd}>
          <Text style={styles.heading}>Top Rated Doctors</Text>
          <View>
            <FlatList
              numColumns={2}
              data={data}
              renderItem={({ item, index }) => {
                return (

                  <View style={styles.docItem}>
                    <Image source={require('./img/download.png')} style={styles.imgDoc} />
                    <Text style={styles.docName}>
                      {item.fullname}
                    </Text>
                    <Text style={styles.docNametitle}>
                    {item.specialist}
                    </Text>

                    <Text
                      style={[
                        styles.docStatus,
                        { color: index / 2 == 0 ? "green" : "red", opacity: index / 2 == 0 ? 1 : 0.6 }
                      ]}
                    >
                      {index / 2 == 0 ? 'Available' : 'Busy'}

                    </Text>
                    <CommonBtn
                      status={index / 2 === 0 ? true : false}
                      w={120}
                      h={40}
                      txt={'Book Appointment'}

                      nav={() => {
                        if (index / 2 === 0) {
                          console.log("hi");
                          navigation.navigate('Booking');
                        }
                      }}

                      navigation={navigation}
                    />

                  </View>
                )
              }}
            />
          </View>
        </View>



        <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Completed')
          }}>
            <Image source={require('./img/compelet.png')} style={styles.bottomIcon} />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Pending')
          }}>

            <Image source={require('./img/pending.png')} style={styles.bottomIcon} />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('CallAmub')
          }}>

            <Image source={require('./img/ambulance.png')} style={styles.bottomIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  bottomView: {
    width: '90%',
    height: 70,
    borderRadius: 10,
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'white',
    alignSelf: "center",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    boxShadow: "1px 1px 5px 1px grey",
  },
  bottomIcon: {
    width: 25,
    height: 25
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    padding: 40,
    color: '#ffffff',
    backgroundColor: 'navy',
    borderRadius: 20,
    boxShadow: '1px 1px 3px 2px grey'
  },
  heading: {
    padding: 12,

    fontSize: 18
  },
  category: {
    paddingBottom: 30,
    backgroundColor: 'aliceblue'
  },
  docItem: {
    width: "45%",
    height: 230,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: "center"
  },
  imgDoc: {
    height: 60,
    width: 60,
    borderRadius: '50%',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 10
  },
  docNametitle: {
    color: 'navy',

    padding: 4,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: 'ghostwhite',

    fontSize: 18,
  },
  docName: {
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  docStatus: {
    fontWeight: 'bold',
    marginBottom: 18
  },
})
