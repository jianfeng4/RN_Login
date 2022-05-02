import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ConfirmButton, Input, NavBar, Tips } from '../common/LoginComponent';



export default function Registor({navigation}) {
    return (
        <SafeAreaView>
            <NavBar
                title='注册'
                rightTitle='登录'
                onRightClick={() => {navigation.navigate('Login')}}

            />
            <View style={styles.content}>
                <View style={styles.line} />
                <Input
                    label="用户名"
                    placeholder="请输入用户名"
                    shortLine={true}
                    onChangeText={(text) => setUserName(text)}
                />
                <Input
                    label="密码"
                    placeholder="请输入密码"
                    shortLine={true}
                    secure={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    label="慕课网ID"
                    placeholder="请输入你的慕课网用户ID"
                    shortLine={true}
                    onChangeText={(text) => setImId(text)}
                />
                <Input
                    label="课程订单号"
                    placeholder="请输入课程订单号"
                    onChangeText={(text) => setOrderId(text)}
                />
                <ConfirmButton title="注册" onClick={()=>{}} />
                <Tips msg='帮助' helpUrl='' />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    content: {
      paddingTop: 20,
      flexGrow: 1,
    },
  
    line: {
      height: 0.5,
      backgroundColor: 'green',
    },
  });