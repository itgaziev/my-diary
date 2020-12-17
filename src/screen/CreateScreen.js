import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtonApp} from "../components/HeaderButtonApp";

export const CreateScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>Create Screen</Text>
        </View>
    )
}

CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Создать пост',
    headerLeft: () => <HeaderButtonApp
        title='Draw Menu'
        iconName='ios-menu'
        onPress={ () => navigation.toggleDrawer() }
    />
})

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
