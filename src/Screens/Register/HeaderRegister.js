import { View, Text,StyleSheet, Animated } from 'react-native'
import React from 'react'

export default function HeaderRegister({leftHeading, rightHeading,subHeading, leftHeaderTranslateX=40, rightHeaderTranslateY=-30, rightHeaderOpacity=0}) {
    return (
      
           
<View>
                <View style={styles.styleHeading}>
                    <Animated.Text style={[styles.heading,{transform:[{translateX:leftHeaderTranslateX}]}]} >{leftHeading}</Animated.Text>
                    <Animated.Text style={[styles.heading,{opacity:rightHeaderOpacity,transform:[{translateY:rightHeaderTranslateY}]}]}>{rightHeading}</Animated.Text>
                </View>
                <Text style={styles.subHeading}>{subHeading}</Text>
          </View>

     
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 40, fontWeight: "bold", fontFamily:"cursive", color:"skyblue",paddingBottom:10
    },
    subHeading: { fontSize: 18, color: "grey", textAlign: "center", fontWeight: "bold",paddingBottom:20 },
    styleHeading:{ flexDirection: "row", justifyContent: "center", alignItem: "center",}

})