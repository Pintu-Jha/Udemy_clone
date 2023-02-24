import { View, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main')
        }, 2000)
    });
    return (
        <View style={Styles.container}>
            <Image
                style={Styles.logoStyle}
                source={require('../image/udemy_logo.png')}
            />
        </View>
    )
}

export default Splash;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#fff"
    },
    logoStyle: {
        width: 275,
        height: 105
    }
})