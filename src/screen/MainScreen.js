import React from 'react'
import {DATA} from "../data";
import {HeaderButtonApp } from "../components/HeaderButtonApp";
import {Platform} from "react-native-web";
import {PostList} from "../components/PostList";

export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
    }

    return <PostList data={ DATA } onOpen={ openPostHandler } />
}

MainScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: Platform.OS,
    headerRight: () => <HeaderButtonApp
        title='Take Photo'
        iconName='ios-camera'
        onPress={ () => navigation.push('Create') }
    />,
    headerLeft: () => <HeaderButtonApp
        title='Draw Menu'
        iconName='ios-menu'
        onPress={ () => navigation.toggleDrawer()  }
    />
})
