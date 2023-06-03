import { View, Text, StyleSheet, FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './CommonComponent/Header'
import CommonGo from './CommonComponent/CommonGo'
export default function Pending() {
  return (
    <View style={styles.container}> 
     
      <Header icon={require('./img/images.png')} title={'Pending Appointments'}/>

      <CommonGo/>
    <View>
      <FlatList
      data={[1,1,1,1,1]}
   
          
            renderItem={({ item, index }) => {
              return (
  
                <View style={styles.viewItem}>
                 <Image source={require('./img/download.png')} style={styles.docImg}/>
                  <View>
                    <Text style={styles.name}>Doctor XYZ</Text>
                    <Text style={styles.timming}>08:30 PM</Text>
                    </View>
                    <Text style={styles.status}>Pending</Text>
                </View>
              )
                  }}
      />
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  viewItem:{
    width: '94%',
    height:100,
    borderRadius: 10,
    borderWidth:1,
    alignSelf:'center',
    marginTop: 10,
    flexDirection:'row'
  },
  docImg:{
    height: 60,
    width: 60,
    borderRadius: '50%',
    margin:6,
    alignSelf: 'center',
    boxShadow: '1px 1px 5px 1px grey'
  },
  name:{
    fontSize:18,

    fontWeight:"bold",
    marginLeft:20,
    marginTop:23
  },
  timming:{
    fontSize:16,
    marginLeft:20,
    marginTop:5
  },
  status:{
    marginLeft:60,
    borderRadius:10,
    padding:5,
    color:'orange',
    fontWeight:'bold'
  }
})