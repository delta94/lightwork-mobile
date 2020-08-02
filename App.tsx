import React, { useState } from 'react'
import MainApp from './app/MainApp'
import { AppLoading } from 'expo';
import { Provider } from "react-redux";
import store from './app/reducers/index';



const App = () => {
    return (
      <Provider store={store}><MainApp />
      </Provider>
    );
}
export default App;