import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack"
import {MainScreen} from "../screen/MainScreen";
import {PostScreen} from "../screen/PostScreen";

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }
}, {
    initialRouteName: 'Main'
})

export const AppNavigation = createAppContainer(PostNavigator)
