import react from "react"

import {createAppContainer} from "react-navigation"
import {createDrawerNavigator} from "react-navigation-Drawer"
import { Dimensions } from "react-native"


import {Feather} from "@expo/vector-icons"

import {
    AllAppointmentScreen,
    CompeletScreen,
    ApprovedScreen,
    PendingScreen,
    ProfileScreen,
    SignOutScreen
} from "./Doctor"

const DrawerNavigator = createDrawerNavigator({
    AllAppointmentScreen,
    CompeletScreen,
    ApprovedScreen,
    PendingScreen,
    ProfileScreen,
    SignOutScreen
})

export default createAppContainer(DrawerNavigator)
