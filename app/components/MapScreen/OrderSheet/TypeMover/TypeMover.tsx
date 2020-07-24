import React, { useState } from 'react';
import { ViewStyle, View } from 'react-native';
import Count from './Count/Count';
import Gazzelle from './Gazzelle/Gazzelle';
import GazzelleType from './Gazzelle/GazzelleType/GazzelleType';
import { TextField } from 'react-native-material-textfield';
import { color } from '../../../../theme/color';

const CONTAINER: ViewStyle = {

}

const TypeMover = () => {
    const [isGazzelle, setGazzelle] = useState(true);
    const [activeSize, setSize] = useState(3);
    return (
        <View>
            <Count />
            <Gazzelle isGazzelle={isGazzelle} setGazzelle={setGazzelle}/>
            <GazzelleType isGazzelle={isGazzelle} activeSize={activeSize} setSize={setSize} />
            <TextField  label="Что входит в Ваш груз"
            contentInset={{ top: 0, label: 0, input: 4 }}
            tintColor={color.green}
            />
            <TextField  label="Промокод"
            contentInset={{ top: 0, label: 0, input: 4 }}
            tintColor={color.green}
            />
            <TextField  label="Бонусы"
            contentInset={{ top: 0, label: 0, input: 4 }}
            tintColor={color.green}
            />
        </View>
    )
}

export default TypeMover