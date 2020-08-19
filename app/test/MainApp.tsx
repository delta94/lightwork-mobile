import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import BonusesScreen from '../screens/BonusesScreen/BonusesScreen'

function useFonts (fontMap) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap)
    setFontsLoaded(true)
  })()
  return [fontsLoaded]
}

const Stack = createStackNavigator()

const App = () => {
  const [fontsLoaded] = useFonts({
    Lato: './theme/fonts/Lato-Regular.ttf',
    'Lato-Bold': './theme/fonts/Lato-Bold.ttf'
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bonuses"
            component={BonusesScreen}
            options={{
              title: 'Бонусы',
              headerStyle: {
                backgroundColor: '#6cc769'
              },
              headerTintColor: '#fff'
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
