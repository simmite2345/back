import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import CommonBtn from './CommonComponent/CommonBtn'
import React, {useEffect,useState } from 'react';
import axios, { Axios } from 'axios';
export default function Category({navigation}) {

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/a1/doctor')
    //  setData(res.data.doctor)
     console.log(res)
     console.log('hu')
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the request
    
  }
};
fetchData();

  return (

    <View>
      <View style={styles.category}>
        <Text style={styles.heading}>Select Category</Text>
        <View>
          <FlatList
            data={[1, 1, 1, 1, 1, 1]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity>
                  <Text style={styles.buttonText}>
                    {'Category' + index + 1}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>

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
                    {data.fullname}
                
                    {'Doctor @gmail' + index}
                  </Text>
                  <Text style={styles.docNametitle}>
                    {'Skin Sppecialisit' + index}
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
                      if (index / 2 === 0 || navigation.navigate('succcess')) {
                        console.log("hi");
                        navigation.navigate('Success');
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

    </View>
  )

}



const styles = StyleSheet.create({
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

});
