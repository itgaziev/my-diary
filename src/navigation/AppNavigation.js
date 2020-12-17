import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {MainScreen} from "../screen/MainScreen";
import {PostScreen} from "../screen/PostScreen";
import {Platform} from "react-native-web";
import {THEME} from "../theme";
import {BookedScreen} from "../screen/BookedScreen";
import {Ionicons} from "@expo/vector-icons";

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }
}, {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '#FFF' : THEME.MAIN_COLOR
        },
        headerTintColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#FFF'
    }
})

const BookedNavigator = createStackNavigator({
    Booked: BookedScreen,
    Post: PostScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '#FFF' : THEME.MAIN_COLOR
        },
        headerTintColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#FFF'
    }
})
const BottomNavigator = createBottomTabNavigator({
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarIcon: info => <Ionicons name='ios-albums' size={25} color={info.tintColor}/>
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarIcon: info => <Ionicons name='ios-star' size={25} color={info.tintColor}/>
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR,
    }
})

export const AppNavigation = createAppContainer(BottomNavigator)
