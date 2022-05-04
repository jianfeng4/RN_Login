import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();


// { Component, keys, theme, extra = {} = {} }这些参数看谁使用了tabNav,给它传过来了啥
export function tabNav({ Component, keys, theme, extra = {} = {} }) {
    // 每个tab对应一个页面,这个页面就是Component
    // tab上面的文字定义为keys
    // theme表示主题
    // extra用来做扩展,extra = {} = {}表示它是一个对象,可传可不传,不传的话就是一个空对象
    return (<Tab.Navigator
        screenOptions={{
            // 可以起到性能优化的作用,当tab很多的时候,先只加载你看到的tab的内容
            lazy: true,
            tabBarItemStyle: styles.tabStyle,
            tabBarScrollEnabled: true,//是否支持 选项卡滚动，默认false
            tabBarInactiveTintColor: 'black',//未激活时的颜色
            tabBarActiveTintColor: 'white',//激活时的颜色
            tabBarStyle: {
                backgroundColor: theme.themeColor,//TabBar的背景色
            },
            tabBarIndicatorStyle: styles.indicatorStyle,//标签指示器样式
            tabBarLabelStyle: styles.labelStyle,//文本的样式
        }}
    >
        {Object.entries(_genTabs({ Component, keys, theme, extra })).map(
            (item) => {
                return (
                    <Tab.Screen
                        key={item[0]}
                        name={item[0]}
                        component={item[1].screen}
                        options={item[1].navigationOptions}
                    />
                )
            }
        )}
    </Tab.Navigator>)

}

function _genTabs({ Component, keys, theme, extra = {} = {} }) {
    const tabs = {};
    // 这里的keys就是res/data文件夹中的那个数组
    keys.forEach((item, index) => { 
        if (item.checked) {
            // 如果是要显示的,那就给48行声明的tabs对象动态地添加对应的键,键值是一个对象
            tabs[`tab${index}`] = {
                //初始化Component时携带默认参数 @https://github.com/react-navigation/react-navigation/issues/2392
                // screen表示要展示的组件
                screen: (props) => (<Component {...props} {...extra} tabLabel={item.name} theme={theme} />),
                navigationOptions: {
                    title: item.name,
                }
            };
        }
    });
    // _genTabs的作用就是动态生成了一个tabs对象
    return tabs;
}
const styles = StyleSheet.create({
    tabStyle: {
        padding: 0
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
    },
    labelStyle: {
        textTransform: 'none',//取消大小写
        fontSize: 13,
        margin: 0
    }
})