import React, { useState } from 'react'
import MainApp from './app/MainApp'
import * as Font from 'expo-font'
import { AppLoading } from 'expo';
import { Provider } from "react-redux";
import store from './app/reducers/index';

const fontsLoad = () => {
  return Font.loadAsync({
    'Lato': require('./assets/fonts/Lato-Medium.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Semibold': require('./assets/fonts/Lato-Semibold.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Hairline': require('./assets/fonts/Lato-Hairline.ttf'),
    'Lato-Heavy': require('./assets/fonts/Lato-Heavy.ttf'),
    'Lato-Medium': require('./assets/fonts/Lato-Medium.ttf'),
  });
}

let App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if (!fontsLoaded) {
    return <AppLoading
      startAsync={fontsLoad}
      onFinish={() => setFontsLoaded(true)} />;
  } else {
    return (
      <Provider store={store}><MainApp />
      </Provider>
    );
  }
}
export default App;