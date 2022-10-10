
import React from 'react';
import { ActivityIndicator } from "react-native";
import AppNavigator from './src/navigation';
import {  useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store";


export default function App() {
  const [loaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    
  });
  if (!loaded) {
    return <ActivityIndicator />;
  }
  
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}


