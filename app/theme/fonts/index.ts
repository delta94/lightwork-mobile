import * as Font from 'expo-font'

export const initFonts = async () => {
  await Font.loadAsync({
    Lato: require('./Lato-Regular.ttf'),
    'Lato-Regular': require('./Lato-Regular.ttf'),
  })
}
