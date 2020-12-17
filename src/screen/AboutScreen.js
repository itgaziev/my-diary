import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtonApp} from "../components/HeaderButtonApp";
import {BookedScreen} from "./BookedScreen";

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>About Screen</Text>
        </View>
    )
}

AboutScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'О нас',
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
