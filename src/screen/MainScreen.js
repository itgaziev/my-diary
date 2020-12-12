import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export const MainScreen = ({navigation}) => {
    const goToPost = () => {
        navigation.navigate('Post')
    }

    return (
        <View style={styles.center}>
            <Text>Main Screen</Text>
            <Button title='Go to post' onPress={goToPost} />
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'Мой дневник'
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
