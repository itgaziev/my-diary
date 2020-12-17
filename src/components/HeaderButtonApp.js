import React from 'react'
import {} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from "./AppHeaderIcon";

export const HeaderButtonApp = ({ title, iconName, onPress }) => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title={title}
            iconName={iconName}
            onPress={ onPress }
        />
    </HeaderButtons>
)
