import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, ImageStyle, View, ViewStyle } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { color } from './theme/color';
import IMAGES from './constants/images';
import {BottomTabHeight} from "./constants/constants"

//SCREENS
import HistoryScreenContainer from './screens/HistoryScreen/HistoryScreenContainer';
import MainScreen from './screens/MainScreen/MainScreen';
import HelpScreen from './screens/HelpScreen/HelpScreen';
import BonusesScreenContainer from './screens/BonusesScreen/BonusesScreenContainer';
import HistoryDetailsScreenContainer from './screens/HistoryScreen/HistoryDetailsScreen/HistoryDetailsScreenContainer';



const TAB_ICON: ImageStyle = {
  width: 25,
  height: 25,
}

const ICON_DIVIDER: ViewStyle = {
  padding: 10,
}

const HistoryStack = createStackNavigator();

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History"
        component={HistoryScreenContainer}
        options={{
          title: 'История',
          headerStyle: {
            backgroundColor: '#6cc769',
          },
          headerTintColor: '#fff',
        }}
      />
      <HistoryStack.Screen name="Details"
        component={HistoryDetailsScreenContainer}
        options={{
          title: 'Детали',
          headerStyle: {
            backgroundColor: '#6cc769',
          },
          headerTintColor: '#fff',
        }} />
    </HistoryStack.Navigator>
  )
}

const BonusesStack = createStackNavigator();

const BonusesStackScreen = () => {
  return (
    <BonusesStack.Navigator>
      <BonusesStack.Screen
        name="Bonuses"
        component={BonusesScreenContainer}
        options={{
          title: 'Бонусы',
          headerStyle: {
            backgroundColor: '#6cc769',
          },
          headerTintColor: '#fff',
        }} />
    </BonusesStack.Navigator>
  )
}

const HelpStack = createStackNavigator();

const HelpStackScreen = () => {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: 'Помощь',
          headerStyle: {
            backgroundColor: '#6cc769',
          },
          headerTintColor: '#fff',
        }} />
    </HelpStack.Navigator>
  )
}

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Главная',
          headerStyle: {
            backgroundColor: '#6cc769',
          },
          headerTintColor: '#fff',
        }} />
    </MainStack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Bonuses') {
              iconName = focused
                ? IMAGES.navigation.bonuses.active
                : IMAGES.navigation.bonuses.normal;
            } else if (route.name === 'History') {
              iconName = focused
                ? IMAGES.navigation.history.active
                : IMAGES.navigation.history.normal;
            }
            else if (route.name === 'Help') {
              iconName = focused
                ? IMAGES.navigation.help.active
                : IMAGES.navigation.help.normal;
            }
            else if (route.name === 'Main') {
              iconName = focused
                ? IMAGES.navigation.main.active
                : IMAGES.navigation.main.normal;
            }
            return (
            <View>
              <Image
              style={TAB_ICON}
              source={iconName}
            />
            <View style={ICON_DIVIDER}></View>
            </View>);
          },
        })}
        activeColor={color.green}
        inactiveColor="#555"
        barStyle={{ 
          backgroundColor: '#fff',
          height: BottomTabHeight,
          }}
        shifting={false}
        initialRouteName="Main"
        >
        <Tab.Screen
          name="Main"
          component={MainStackScreen}
          options={{
            title: 'Главная',
          }}
        />
        <Tab.Screen
          name="Bonuses"
          component={BonusesStackScreen}
          options={{
            title: 'Бонусы',
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryStackScreen}
          options={{
            title: 'История',
          }}
        />
        <Tab.Screen
          name="Help"
          component={HelpStackScreen}
          options={{
            title: 'Помощь',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
