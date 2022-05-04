import React, { Component } from 'react';
import {
    StyleSheet, Text, View,SafeAreaView
} from 'react-native';

import ButtomNavigator from '../navigator/ButtomNavigator'





export default function Home() {
  return (
    //   这个样式非常重要，不然tab栏就是在上面的
    <SafeAreaView style={{flex:1}}>
        <ButtomNavigator />
    </SafeAreaView>
  )
}

