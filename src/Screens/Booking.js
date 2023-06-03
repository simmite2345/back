import { View, TextInput, Text, Image, TouchableOpacity, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './CommonComponent/Header'
import StyleSheet from 'react-native-media-query';

import CommonBtn from './CommonComponent/CommonBtn';


let DaysList = [];

export default function Booking({ navigation }) {


  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDay, setSelectedDay] = useState(-1);
  // const [slots, setSlots] = useState([
  //   {sloT:'10:00 - 12:00 PM', selected: false},
  //   {sloT:'12:00 - 02:00 PM', selected: false},
  //   {sloT:'02:00 - 04:00 PM', selected: false},
  //   {sloT: '04:00 - 06:00 PM', selected: false},
  //   {sloT: '06:00 - 08:00 PM', selected: false},
  //   {sloT:'08:00 - 10:00 PM', selected: false},
  //  ])
  const [days, setDays] = useState([]);


  useEffect(() => {


    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({ day: i, selected: false });

    }
    setDays(DaysList);
  }, []);

  const getDays = month => {
    let days = 0;
    if (month == 1) {
      days = 31;

    } else if (month == 2) {
      days = 28;
    }
    else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    }
    else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    }
    else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    }
    else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    }
    else if (month == 12) {
      days = 31;
    }

    return days;

  }

  return (
    <View style={styles.main}>
      <Header icon={require('./img/images.png')} title={'Book Appointments'} />
      <Image source={require('./img/download.png')} style={styles.imgDoc} />
      <Text style={styles.name}>Doctor Shiva</Text>
      <Text style={styles.tname}>Heart Transplant Specialisit</Text>
      <Text style={styles.heading}>Select Date</Text>
      <View >
        <FlatList

          data={days}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (item.day < new Date().getDate()) {
                    console.log('ji')
                  } else {
                    setSelectedDay(index);
                  }
                }}
                style={{
                  fontSize: 18,
                  fontFamily: 'Gill Sans',
                  textAlign: 'center',
                  margin: 10,
                  padding: 20,
                  backgroundColor: selectedDay == index ? 'navy' : 'white',
                  borderRadius: 10,
                  borderColor: selectedDay == index ? 'navy' : 'grey',
                  borderWidth: 2,
                }}
              >

                <Text style={{ color: selectedDay == index ? 'white' : 'navy', }}>

                  {item.day}
                </Text>



              </TouchableOpacity>


            )
          }}
        />




        <Text style={styles.heading}>Available Slot</Text>
        <View>
          <FlatList
            numColumns={2}
            data={['10:00 - 12:00 PM', '12:00 - 02:00 PM', '02:00 - 04:00 PM', '04:00 - 06:00 PM', '06:00 - 08:00 PM', '08:00 - 10:00 PM']}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedSlot(index);
                  }}
                  style={[styles.timeSlot, { borderColor: selectedSlot == index ? 'green' : 'grey' }]}>
                  <Text style={{ color: selectedSlot == index ? 'green' : 'grey' }}>{item}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <Text style={styles.heading}>Patient Name</Text>

        <TextInput style={styles.nameInput} placeholder='Enter Name' />
        <Text style={styles.heading}>Age</Text>

        <TextInput style={styles.nameInput} placeholder='Age' />
        <Text style={styles.heading}>Phone no.</Text>

        <TextInput style={styles.nameInput} placeholder='Phone' />
        <Text style={styles.heading}>Problem </Text>

        <TextInput style={styles.nameInput} placeholder='Enter Your problem carefully' />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.genderView}>
          <TouchableOpacity style={styles.gender} onPress={() => {
            setSelectedGender(0)
          }}>
            <Image source={require('./img/male.png')} style={[styles.imgGender, { borderWidth: 2, borderRadius: 10, borderColor: selectedGender == 0 ? 'green' : 'grey' }]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.gender} onPress={() => {
            setSelectedGender(1)
          }}>
            <Image source={require('./img/female.jfif')} style={[styles.imgGender, { borderWidth: 2, borderRadius: 10, borderColor: selectedGender == 1 ? 'green' : 'grey' }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.btnStyle} dataSet={{ media: ids.btnStyle }}>
          <CommonBtn
            status={true}

            w={100} h={45} txt={'Book Now'}
            style={{ margin: 20 }}
            nav={() => {

              console.log("hi")
              navigation.navigate('Success');

            }}
          />



        </View>

      </View>

    </View>
  )
}

const { ids, styles } = StyleSheet.create({
  main: {


  },
  imgDoc: {
    height: 100,
    width: 100,
    borderRadius: '50%',
    marginTop: 30,
    alignSelf: 'center',
    boxShadow: '1px 1px 5px 1px grey'
  },

  name: {
    alignSelf: 'center',
    color: 'Black',
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold'
  },
  tname: {
    alignSelf: 'center',
    color: 'teal',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    backgroundColor: "aliceblue",
    borderRadius: 10,
    padding: 5
  },
  heading: {
    marginTop: 42,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 'bold'
  },
  timeSlot: {
    height: 40,
    width: '45%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    margin: 10,
    padding: 8,
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: '94%',
    heigth: 65,
    alignSelf: 'center',
    borderWidth: 1,
    paddingLeft: 10,
    padding: 10
  },
  genderView: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  gender: {
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 30
  },
  imgGender: {
    height: 80,
    width: 80,

  },
  btnStyle: {
    marginBottom: 20,
    width: "80%",
    alignSelf: 'center',
    '@media (max-width: 1600px) and (min-width: 444px)': {
      height: 50,
      width: "20%",
      // position: 'relative'
    },

  }
})