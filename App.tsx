import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import 'react-native-gesture-handler'
import { Navigator } from './src/navigator/Navigator'

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}

export default App
