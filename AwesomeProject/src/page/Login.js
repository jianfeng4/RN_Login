import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

import { NavBar, Input, ConfirmButton, Tips } from '../common/LoginComponent'

export default function Login({navigation}) {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    return (
        <SafeAreaView>
            <NavBar
                title='登录'
                rightTitle='注册'
                onRightClick={() => {navigation.navigate('Registor')}}
            />
            <View>
                <Input
                    label="帐号"
                    placeholder="请输入帐号"
                    secure={false}
                    onChangeText={(text) => { setUserName(text) }}
                />
                <Input
                    label="密码"
                    placeholder="请输入密码"
                    secure={true}
                    onChangeText={(text) => { setPassWord(text) }}
                />
                <ConfirmButton title="登录" onClick={() => { }} />
                <Tips msg='帮助' helpUrl='' />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})