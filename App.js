
import React from 'react';
import { ActivityIndicator } from "react-native";
import AppNavigator from './src/navigation';
import {  useFonts } from "expo-font";


export default function App() {
  const [loaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    
  });
  if (!loaded) {
    return <ActivityIndicator />;
  }
  
  return (
    <AppNavigator />
  );
}


