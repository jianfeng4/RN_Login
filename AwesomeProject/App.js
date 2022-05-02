import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppNavigator from './src/navigator/AppNavigator'

export default function App() {
  return (
    <>
    {AppNavigator()}
    </>
  )
}

const styles = StyleSheet.create({})