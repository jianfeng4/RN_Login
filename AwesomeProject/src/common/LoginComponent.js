import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export const NavBar = (props) => {
    const { title, rightTitle, onRightClick } = props;
    return (
        <View style={styles.NavBar}>
            <View />
            <View style={styles.titleLayout}>
                <Text style={{ fontSize: 20 }}>{title}</Text>
            </View>
            <TouchableOpacity onPress={onRightClick}>
                <Text style={styles.button}>{rightTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const Input = (props) => {
    const { label, placeholder, shortLine, secure, onChangeText } = props;
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    onChangeText={ onChangeText }
                />
            </View>
            <View style={{
                height: 0.5,
                backgroundColor: '#D0D4D4',
            }} />
        </View>
    )
}


export const ConfirmButton = (props) => {
    const { title, onClick } = props;
    return (
        <TouchableOpacity style={styles.confirmLayout} onPress={onClick}>
            <Text style={styles.confirmTitle}>{title}</Text>
        </TouchableOpacity>
    )
}


export const Tips = (props) => {
    const { msg, helpUrl } = props
    return (
        <View style={styles.tipsLayout}>
            <Text style={styles.tips}>{msg}</Text>
            <Button title='查看帮助' onPress={() => {
                Linking.openURL(helpUrl)
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    // NavBar的样式
    NavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    titleLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    button: {
        color: '#007AFF',
        paddingRight: 15,
        fontSize: 16
    },

    // Input的样式
    inputLabel: {
        marginLeft: 15,
        marginTop: 18,
        marginBottom: 18,
        fontSize: 16,
        width: 90
    },
    input: {
        flex: 1,
        marginRight: 15
    },

    // 注册按钮
    confirmLayout: {
        backgroundColor: '#2196F3',
        alignItems: 'center',
        padding: 12,
        margin: 20,
        marginTop: 30,
        borderRadius: 5
    },
    confirmTitle: {
        fontSize: 20,
        color: 'white'
    },

    //帮助
    tipsLayout: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tips: {
        fontSize: 14,
        color: 'red'
    },
})