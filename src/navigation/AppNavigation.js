import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack"
import {MainScreen} from "../screen/MainScreen";
import {PostScreen} from "../screen/PostScreen";
import {Platform} from "react-native-web";
import {THEME} from "../theme";

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

export const AppNavigation = createAppContainer(PostNavigator)
