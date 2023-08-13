import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/components/HomeScreen'
import LoginActivity from './src/screens/LoginActivity'
import LoginOtp from './src/screens/LoginOtp'
import CheckOutScreen from './src/components/CheckOutScreen'

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='LoginActivity' component={LoginActivity} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='LoginOtp' component={LoginOtp} options={{ headerShown: false }} /> */}
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='CheckOutScreen' component={CheckOutScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})