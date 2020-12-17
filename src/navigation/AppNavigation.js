import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {MainScreen} from "../screen/MainScreen";
import {PostScreen} from "../screen/PostScreen";
import {Platform} from "react-native-web";
import {THEME} from "../theme";
import {BookedScreen} from "../screen/BookedScreen";
import {Ionicons} from "@expo/vector-icons";

const navigatorOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? '#FFF' : THEME.MAIN_COLOR
        },
        headerTintColor: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#FFF'
    }
}

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: PostScreen
}, navigatorOptions)

const BookedNavigator = createStackNavigator({
    Booked: BookedScreen,
    Post: PostScreen
}, navigatorOptions)

const bottomTabsConfig = {
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarLabel: 'Все',
            tabBarIcon: info => <Ionicons name='ios-albums' size={25} color={info.tintColor}/>
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarLabel: 'Избранное',
            tabBarIcon: info => <Ionicons name='ios-star' size={25} color={info.tintColor}/>
        }
    }
}

const BottomNavigator =
    Platform.OS === 'ios' ?
        createBottomTabNavigator(bottomTabsConfig, {
            tabBarOptions: {
                activeTintColor: THEME.MAIN_COLOR,
            }
 })
:
        createMaterialBottomTabNavigator(bottomTabsConfig, {
            activeTintColor: '#FFF',
            shifting: true,
            barStyle: {
                backgroundColor: THEME.MAIN_COLOR
            }
})

export const AppNavigation = createAppContainer(BottomNavigator)
