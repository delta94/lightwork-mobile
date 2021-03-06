import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Image, ImageStyle, View, ViewStyle } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { color } from './theme/color'
import IMAGES from './constants/images'
import { BOTTOMTAB_HEIGHT } from './constants/constants'

// SCREENS
import HistoryScreenContainer from './screens/HistoryScreen/HistoryScreenContainer'
import MainScreen from './screens/MainScreen/MainScreen'
import HelpScreen from './screens/HelpScreen/HelpScreen'
import BonusesScreenContainer from './screens/BonusesScreen/BonusesScreenContainer'
import HistoryDetailsScreenContainer from './screens/HistoryScreen/HistoryDetailsScreen/HistoryDetailsScreenContainer'
import MapScreen from './screens/MapScreen/MapScreen'
import Header from './components/MainScreen/Header/Header'
import { scale } from './theme/dimensions'

const TAB_ICON: ImageStyle = {
  width: 25,
  height: 25
}

const ICON_DIVIDER: ViewStyle = {
  padding: scale(10)
}

const HistoryStack = createStackNavigator()

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="History"
        component={HistoryScreenContainer}
        options={{
          title: 'История',
          headerStyle: {
            backgroundColor: color.green
          },
          headerTintColor: color.white
        }}
      />
      <HistoryStack.Screen
        name="Details"
        component={HistoryDetailsScreenContainer}
        options={{
          title: 'Детали',
          headerStyle: {
            backgroundColor: color.green
          },
          headerTintColor: color.white
        }}
      />
    </HistoryStack.Navigator>
  )
}

const BonusesStack = createStackNavigator()

const BonusesStackScreen = () => {
  return (
    <BonusesStack.Navigator>
      <BonusesStack.Screen
        name="Bonuses"
        component={BonusesScreenContainer}
        options={{
          title: 'Бонусы',
          headerStyle: {
            backgroundColor: color.green
          },
          headerTintColor: color.white
        }}
      />
    </BonusesStack.Navigator>
  )
}

const HelpStack = createStackNavigator()

const HelpStackScreen = () => {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: 'Помощь',
          headerStyle: {
            backgroundColor: color.green
          },
          headerTintColor: color.white
        }}
      />
    </HelpStack.Navigator>
  )
}

const MainStack = createStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Главная',
          headerStyle: {
            backgroundColor: color.green,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0 // remove shadow on iOS
          },
          headerTintColor: color.white,
          // eslint-disable-next-line react/display-name
          headerTitle: () => <Header />
        }}
      />
    </MainStack.Navigator>
  )
}

const MapStack = createStackNavigator()

const MapStackScreen = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Заказать',
          headerStyle: {
            backgroundColor: color.green
          },
          headerTintColor: color.white
        }}
      />
    </MapStack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }: any) => ({
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused }: any) => {
            let iconName
            if (route.name === 'Bonuses') {
              iconName = focused
                ? IMAGES.navigation.bonuses.active
                : IMAGES.navigation.bonuses.normal
            } else if (route.name === 'History') {
              iconName = focused
                ? IMAGES.navigation.history.active
                : IMAGES.navigation.history.normal
            } else if (route.name === 'Help') {
              iconName = focused
                ? IMAGES.navigation.help.active
                : IMAGES.navigation.help.normal
            } else if (route.name === 'Main') {
              iconName = focused
                ? IMAGES.navigation.main.active
                : IMAGES.navigation.main.normal
            } else if (route.name === 'Map') {
              iconName = focused
                ? IMAGES.navigation.main.active
                : IMAGES.navigation.main.normal
            }
            return (
              <View>
                <Image style={TAB_ICON} source={iconName} />
                <View style={ICON_DIVIDER}></View>
              </View>
            )
          }
        })}
        activeColor={color.green}
        inactiveColor={color.darkGrey}
        barStyle={{
          backgroundColor: color.white,
          height: BOTTOMTAB_HEIGHT,
          justifyContent: 'center'
        }}
        shifting={false}
        initialRouteName="Main"
      >
        <Tab.Screen
          name="Main"
          component={MainStackScreen}
          options={{
            title: 'Главная'
          }}
        />
        <Tab.Screen
          name="Bonuses"
          component={BonusesStackScreen}
          options={{
            title: 'Бонусы'
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapStackScreen}
          options={{
            title: 'Заказать'
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryStackScreen}
          options={{
            title: 'История'
          }}
        />
        <Tab.Screen
          name="Help"
          component={HelpStackScreen}
          options={{
            title: 'Помощь'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
