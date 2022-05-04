import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

import { NavBar, Input, ConfirmButton, Tips } from '../common/LoginComponent'

import {LoginNet} from '../net/LoginNet'

export default function Login({navigation}) {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    const onLogin=()=>{
        if (userName === '' || passWord === '') {
            return;
        }

        // LoginNet(userName,passWord).then((res)=>{
        //     console.log('登陆成功');

        // }).catch(err=>{
        //     console.log('登陆失败')
        // })

        // 直接跳过去吧
        navigation.navigate('Home')
    }

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
                <ConfirmButton title="登录" onClick={() => {onLogin()}} />
                <Tips msg='帮助' helpUrl='' />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})