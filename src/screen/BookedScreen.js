import React from 'react'
import {View, StyleSheet, FlatList } from 'react-native'
import {DATA} from "../data";
import {Post} from "../components/Post";
import {HeaderButtonApp } from "../components/HeaderButtonApp";

export const BookedScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
    }

    return (
        <View style={styles.center}>
            <FlatList
                data={DATA.filter( post => post.booked )}
                keyExtractor={ post => post.id.toString() }
                renderItem={ ({ item }) => <Post post={item} onOpen={openPostHandler } /> }
            />
        </View>
    )
}

BookedScreen.navigationOptions = {
    headerTitle: 'Избранное',
    headerLeft: () => <HeaderButtonApp
        title='Draw Menu'
        iconName='ios-menu'
        onPress={ () => console.log('Press menu') }
    />
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
});
