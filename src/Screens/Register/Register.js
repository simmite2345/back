import React, { useEffect, useRef } from 'react';
import { Text, View, Button, TextInput, TouchableWithoutFeedback, ScrollView, Dimensions, Animated,TouchableOpacity } from 'react-native';
import StyleSheet from 'react-native-media-query';
import HeaderRegister from './HeaderRegister';
import FormSelectorBtn from './FormSelectorBtn';
import SignUp from './SignUp';
import Login from './Login';
import axios from 'axios';


// import {Formik} from 'formik';
// import * as Yup from 'yup'

const { width } = Dimensions.get('window')


export default function Register({navigation}) {
    const animation = useRef(new Animated.Value(0)).current;
    const scrollView = useRef();

    // const fetchApi = async () =>{
    //     try {
    //         const res = await axios.post('http://192.168.1.11:8000/api/a1/register')
    //         console.log(res)
            
    //     } catch (error) {
    //         console.log(error.message)
    //         console.log("hy")
    //     }
    // }

    // useEffect(() =>{
    //     fetchApi()
    // }, [])

    const rightHeaderOpacity = animation.interpolate({
        inputRange: [0, width],
        outputRange: [1, 0],
    })

    const leftHeaderTranslateX = animation.interpolate({
        inputRange: [0, width],
        outputRange: [0, 40],
    })

    const rightHeaderTranslateY = animation.interpolate({
        inputRange: [0, width],
        outputRange: [0, -20],
    })
    const loginColorInterpolate = animation.interpolate({
        inputRange: [0, width],
        outputRange: ['blue', 'navy'],
    })

    const signUpColorInterpolate = animation.interpolate({
        inputRange: [0, width],
        outputRange: ['navy', 'blue'],
    })


    return (
        <View style={{ flex: 1, paddingTop: 120, backgroundColor: "white", paddingBottom: 20 }} >
            <View style={{ heigth: 70 }}>
                <HeaderRegister leftHeading="Welcome " rightHeading="Back" subHeading="Book Doctor Appointment Online" rightHeaderOpacity={rightHeaderOpacity
                } leftHeaderTranslateX={leftHeaderTranslateX} rightHeaderTranslateY={rightHeaderTranslateY} />

            </View>
            <View style={{ flexDirection: "row", margin: 20 }}>
                <FormSelectorBtn style={styles.borderL} title="Sign Up" backgroundColor={signUpColorInterpolate} onPress={() => scrollView.current.scrollTo({ x: 0 })} />
                <FormSelectorBtn style={styles.borderR} title="Login" backgroundColor={loginColorInterpolate} onPress={() => scrollView.current.scrollTo({ x: width })} />
            </View>

            {/* form field */}


            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16} ref={scrollView}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: animation } } }]

                    , {
                        useNativeDriver: false
                    }
                )}>
                <SignUp navigation={navigation} />

                <ScrollView>
                    <Login navigation={navigation} />

                </ScrollView>
               
            </ScrollView>


           
        </View>
    )
}
const { ids, styles } = StyleSheet.create({

    borderL: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    borderR: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    }
})