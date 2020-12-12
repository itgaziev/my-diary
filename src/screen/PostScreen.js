import React from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, ScrollView } from 'react-native'
import {DATA} from "../data";
import {THEME} from "../theme";
import {HeaderButtonApp} from "../components/HeaderButtonApp";

export const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(p => p.id === postId )

    // useEffect(() => {
    //     navigation.setParams({ booked: post.booked })
    // }, [])

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы точно хотите удалить пост?',
            [
                {
                    text: 'Отменить',
                    style: 'cancel'
                },
                { text: 'Удалить', style: 'destructive', onPress: () => {} }
            ],
            { cancelable: false }
        )
    }

    return (
        <ScrollView>
            <Image source={{ uri: post.img }} style={ styles.image } />
            <View style={ styles.textWrap }>
                <Text style={ styles.title }>{ post.text }</Text>
            </View>
            <Button
                title='Remove'
                color={ THEME.DANGER_COLOR }
                onPress={ removeHandler }
            />
        </ScrollView>
    )
}

PostScreen.navigationOptions = ({ navigation }) => {
    const date = navigation.getParam('date')
    const booked = navigation.getParam('booked')
    const iconName = booked ? 'ios-star' : 'ios-star-outline'

    return {
        headerTitle: 'Post from ' + new Date(date).toLocaleDateString(),
        headerRight: () => <HeaderButtonApp
            title='Take Photo'
            iconName={iconName}
            onPress={ () => console.log('Press photo') }
        />
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'Ubuntu-Regular'
    }
});
