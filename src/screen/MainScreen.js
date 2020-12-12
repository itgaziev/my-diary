import React from 'react'
import {View, StyleSheet, FlatList } from 'react-native'
import {DATA} from "../data";
import {Post} from "../components/Post";
import {MainScreenHeaderRight} from "../components/HeaderButtonApp";

export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date })
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
    headerTitle: 'Мой дневник',
    headerRight: () => <MainScreenHeaderRight />
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
});
