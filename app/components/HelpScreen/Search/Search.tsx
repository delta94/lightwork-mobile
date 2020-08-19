import React from 'react'
import { View, ViewStyle, TextStyle } from 'react-native'
import { SearchBar } from 'react-native-elements'

// DOCUMENTATION
// https://react-native-elements.github.io/react-native-elements/docs/searchbar.html

// STYLES
// ViewStyles
const CONTAINER: ViewStyle = {
  flexDirection: 'column',
  alignSelf: 'stretch',
  backgroundColor: '#fff',
  paddingVertical: 5,
  borderBottomWidth: 1,
  borderColor: '#f4f4f4',
  paddingHorizontal: 10,
}

const INPUT_CONTAINER: ViewStyle = {
  width: '100%',
  backgroundColor: '#fff',
}

const INPUT: ViewStyle = {
  backgroundColor: '#e5e4ea',
  height: 20,
}

// TextStyles
const INPUT_TEXT: TextStyle = {
  fontSize: 16,
}

// COMPONENT
const Search = (props) => {
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
