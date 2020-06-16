import  React from 'react'
import { ViewStyle, View, Text  } from 'react-native';
import Bonuses from './Bonuses/Bonuses';
import Card from './Card/Card';

const CONTAINER: ViewStyle = {

}

const Balance = () => {
    return (
        <View style={CONTAINER}>
            <Bonuses />
            <Card />          
        </View>
        
    )
}

export default Balance;