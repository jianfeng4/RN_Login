import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Popular from '../page/Popular'
import Trending from '../page/Trending'
import Favorite from '../page/Favorite'
import My from '../page/My'

// 字体图标库
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export default function MyTabs() {
    return (
        // 这里不需要用<NavigationContainer>包起来了，因为他们被Home抱起来，而Home被<NavigationContainer>包起来
        <Tab.Navigator>
            <Tab.Screen
                name="Popular"
                component={Popular}
            />
            <Tab.Screen name="Trending" component={Trending} />
            <Tab.Screen name="Favorite" component={Favorite} />
            <Tab.Screen name="My" component={My} />
        </Tab.Navigator>
    );
}