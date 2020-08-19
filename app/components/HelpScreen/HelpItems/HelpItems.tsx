import React, { useState } from 'react'
import {
  ViewStyle,
  View,
  Text,
  TextStyle,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import * as Animatable from 'react-native-animatable'
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'

// DOCUMENTATION
// https://github.com/oblador/react-native-collapsible
// https://github.com/oblador/react-native-animatable

// STYLES
// ViewStyle
const CONTAINER: ViewStyle = {
  alignSelf: 'stretch',
  alignItems: 'center'
}

const HEADER: ViewStyle = {
  flexDirection: 'row',
  padding: 20,
  backgroundColor: '#fff',
  justifyContent: 'space-between',
  alignSelf: 'stretch'
}

const CONTENT: ViewStyle = {
  backgroundColor: '#fff',
  paddingHorizontal: 20,
  paddingBottom: 20
}

const DIVIDER: ViewStyle = {
  borderBottomWidth: 1,
  borderColor: '#f4f4f4'
}

const ICON: ViewStyle = {
  marginTop: 2,
  alignSelf: 'flex-start'
}

const ERROR: ViewStyle = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  justifyContent: 'center',
  paddingTop: 10
}

const ERROR_ICON: ViewStyle = {
  paddingRight: 10
}

const SUBHEADER: ViewStyle = {
  backgroundColor: '#f4f4f4',
  paddingVertical: 10,
  alignSelf: 'stretch',
  alignItems: 'center'
}

// TextStyle
const HEADER_TEXT: TextStyle = {
  fontSize: 15,
  maxWidth: '92%'
}

const CONTENT_TEXT: TextStyle = {
  fontSize: 13
}

const ERROR_TEXT: TextStyle = {
  fontSize: 16,
  alignSelf: 'center'
}

const SUBHEADER_TEXT: TextStyle = {
  fontSize: 16
}

// FUNCTIONS
const _renderHeader = (section, i, isActive, sections) => {
  // AccordionHeader
  return (
    <View style={HEADER}>
      <Text style={HEADER_TEXT}>{section.title}</Text>
      <Animatable.View
        duration={300}
        transition="rotate"
        style={{
          ...ICON,
          transform: isActive ? [{ rotate: '90deg' }] : [{ rotate: '0deg' }]
        }}
      >
        <Entypo name="chevron-right" size={20} color="#444" />
      </Animatable.View>
    </View>
  )
}

const _renderContent = (section) => {
  // AccordionContent
  return (
    <View style={CONTENT}>
      <Text style={CONTENT_TEXT}>{section.content}</Text>
    </View>
  )
}

const _renderFooter = () => {
  // AccordionDivider
  return <View style={DIVIDER}></View>
}

// COMPONENT
const HelpItems = (props) => {
  // SetActiveSection
  const [activeSection, _updateSections] = useState([])
  const [isPresIn, setPress] = useState(false)
  if (props.value == '') {
    if (props.isFocus == true) {
      return (
        <View style={ERROR}>
          <Ionicons
            style={ERROR_ICON}
            name="ios-search"
            size={25}
            color="black"
          />
          <Text style={ERROR_TEXT}>Введите запрос!</Text>
        </View>
      )
    } else {
      return (
        <View style={CONTAINER}>
          <ScrollView>
            <Accordion
              sections={props.sections}
              activeSections={activeSection}
              renderHeader={_renderHeader}
              renderContent={_renderContent}
              renderFooter={_renderFooter}
              onChange={_updateSections}
              touchableComponent={TouchableHighlight}
              touchableProps={{ activeOpacity: 0.95 }}
            />
          </ScrollView>
        </View>
      )
    }
  }
  if (props.value != '') {
    if (props.sections.length == 0) {
      return (
        <View style={ERROR}>
          <MaterialIcons
            style={ERROR_ICON}
            name="error-outline"
            size={20}
            color="black"
          />
          <Text style={ERROR_TEXT}>По запросу ничего не найдено</Text>
        </View>
      )
    } else {
      return (
        <View style={CONTAINER}>
          <ScrollView>
            <View style={SUBHEADER}>
              <Text style={SUBHEADER_TEXT}>Результаты поиска</Text>
            </View>
            <Accordion
              sections={props.sections}
              activeSections={activeSection}
              renderHeader={_renderHeader}
              renderContent={_renderContent}
              renderFooter={_renderFooter}
              onChange={_updateSections}
            />
          </ScrollView>
        </View>
      )
    }
  } else {
    return (
      <View style={ERROR}>
        <Text style={ERROR_TEXT}>Error</Text>
      </View>
    )
  }
}

export default HelpItems
