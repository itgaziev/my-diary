import React from 'react'
import {View, StyleSheet, FlatList } from 'react-native'
import {DATA} from "../data";
import {Post} from "../components/Post";
import {HeaderButtonApp } from "../components/HeaderButtonApp";
import {Platform} from "react-native-web";

export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked })
    }

    return (
        <View style={styles.center}>
            <FlatList
                data={DATA}
                keyExtractor={ post => post.id.toString() }
                renderItem={ ({ item }) => <Post post={item} onOpen={openPostHandler } /> }
            />
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: Platform.OS,
    headerRight: () => <HeaderButtonApp
        title='Take Photo'
        iconName='ios-camera'
        onPress={ () => console.log('Press photo') }
    />,
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
