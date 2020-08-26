import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { scale, fontSize } from '../../../theme/dimensions'
import { color } from '../../../theme/color'

// DOCUMENTATION
// https://react-native-elements.github.io/react-native-elements/docs/searchbar.html

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {
  flexDirection: 'column',
  alignSelf: 'stretch',
  backgroundColor: color.white,
  paddingVertical: scale(5),
  borderBottomWidth: 1,
  borderColor: color.backGrey,
  paddingHorizontal: scale(10)
}

const INPUT_CONTAINER: ViewStyle = {
  width: '100%',
  backgroundColor: color.white
}

const INPUT: ViewStyle = {
  backgroundColor: color.backGrey,
  height: 20
}

// TextStyles
const INPUT_TEXT: TextStyle = {
  fontSize: fontSize.regularSmall
}

// COMPONENT
const Search = (props: any) => {
  return (
    <View style={CONTAINER}>
      <SearchBar
        placeholder="Что ищете?"
        onChangeText={(text) => props.setValue(text)}
        value={props.value}
        platform="ios"
        lightTheme={true}
        containerStyle={INPUT_CONTAINER}
        inputContainerStyle={INPUT}
        inputStyle={INPUT_TEXT}
        round={true}
        searchIcon={{ size: 24 }}
        cancelButtonTitle="Отменить"
        onFocus={() => props.setFocus(true)}
        onBlur={() => props.setFocus(false)}
      />
    </View>
  )
}

export default Search
