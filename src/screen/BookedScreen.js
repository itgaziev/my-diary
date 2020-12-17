import React from 'react'
import {DATA} from "../data";
import {HeaderButtonApp } from "../components/HeaderButtonApp";
import {PostList} from "../components/PostList";

export const BookedScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
    }

    return <PostList data={ DATA.filter( post => post.booked ) } onOpen={ openPostHandler } />
}

BookedScreen.navigationOptions = {
    headerTitle: 'Избранное',
    headerLeft: () => <HeaderButtonApp
        title='Draw Menu'
        iconName='ios-menu'
        onPress={ () => console.log('Press menu') }
    />
}
