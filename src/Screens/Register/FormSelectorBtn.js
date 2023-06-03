import { View, Text,TouchableWithoutFeedback,StyleSheet,Animated} from 'react-native'
import React from 'react'

export default function ({title,backgroundColor,style,onPress}) {
  return (
                <TouchableWithoutFeedback onPress={onPress}>
                    <Animated.View style={[styles.container,style,{backgroundColor}]}>
                        <Text style={styles.title}>{title}</Text>

                    </Animated.View>
                </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({
container:{ height: 45, width: "50%", backgroundColor: "navy", justifyContent: "center", alignItems: "center", },
title:{ color: "white", fontSize: 16 }
})