import React from 'react'
import { ViewStyle, View } from 'react-native'
import Type from './Type/Type'
import { TextField } from 'react-native-material-textfield'
import { color } from '../../../../theme'

const TypeCleaning = () => {
  return (
    <View>
      <Type />
      <TextField
        label="Комментарий к заказу"
        contentInset={{ top: 0, label: 0, input: 4 }}
        tintColor={color.orange}
      />
      <TextField
        label="Промокод"
        contentInset={{ top: 0, label: 0, input: 4 }}
        tintColor={color.green}
      />
      <TextField
        label="Бонусы"
        contentInset={{ top: 0, label: 0, input: 4 }}
        tintColor={color.green}
      />
    </View>
  )
}

export default TypeCleaning
