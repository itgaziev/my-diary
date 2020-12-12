import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const CreateScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>Create Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
