import React from 'react';
import { ViewStyle } from 'react-native';
import { View } from 'react-native-animatable';
import Count from './Count/Count';
import { TextField } from 'react-native-material-textfield';
import { color } from '../../../../theme';

const CONTAINER: ViewStyle = {

}

const TypeMaster = () => {
    return (
        <View>
            <Count />
            <TextField  label="Что нужно сделать"
            contentInset={{ top: 0, label: 0, input: 4 }}
            tintColor={color.orange}
            />
            <TextField  label="Материал, который нужно закупить"
            contentInset={{ top: 0, label: 0, input: 4 }}
            tintColor={color.orange}
            />
            <TextField  label="Комментарий к заказу"
            contentInset={{ top: 0, label: 0, input: 4 }}
            tintColor={color.orange}
            />
            <TextField  label="Промокод"
            contentInset={{ top: 0, label: 0, input: 4 }}
            tintColor={color.orange}
            />
            <TextField  label="Бонусы"
            contentInset={{ top: 0, label: 0, input: 4 }}
            tintColor={color.orange}
            />
        </View>
    )
}

export default TypeMaster