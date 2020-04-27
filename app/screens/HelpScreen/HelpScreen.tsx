import React from 'react'
import { View, ViewStyle } from 'react-native';
import { color } from '../../theme';
import HelpItem from '../../components/HelpScreen/HelpItem/HelpItem';

const CONTAINER: ViewStyle = {
    flexDirection: "column",
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 0,
    alignSelf: 'stretch',
    backgroundColor: color.white
}

let HelpScreen = () => {
    return (
        <HelpItem />

    );
}

export default HelpScreen;