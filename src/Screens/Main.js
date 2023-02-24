import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Mylearning from "../tabs/Mylearning"
import User from '../tabs/User';
import Feature from '../tabs/Feature';
import Search from '../tabs/Search';
import Whislist from '../tabs/Whislist';




const Main = () => {
    const [selecteTab, setselectTab] = useState(0);

    return (
        <View style={{ flex: 1 }}>
            <View style={{flex :1}} >
                {
                    selecteTab == 0 ? <Feature /> : selecteTab == 1 ? <Search /> : selecteTab == 2 ? <Mylearning /> : selecteTab == 3 ? <Whislist /> : <User />
                }
            </View>
            <View style={Styles.bottomTabContainer}>
                <TouchableOpacity style={Styles.bottom_Icons} onPress={() => { setselectTab(0) }}>
                    <Image
                        source={selecteTab == 0 ? require('../image/feature_fill.png') : require('../image/feature.png')}
                        style={Styles.imageStyle}
                    />
                    <Text style={Styles.bottomText}>Feature</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.bottom_Icons} onPress={() => { setselectTab(1) }}>
                    <Image
                        source={selecteTab == 1 ? require('../image/search_fill.png') : require('../image/search.png')}
                        style={Styles.imageStyle}
                    />
                    <Text style={Styles.bottomText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.bottom_Icons} onPress={() => { setselectTab(2) }}>
                    <Image
                        source={selecteTab == 2 ? require('../image/play_fill.png') : require('../image/play.png')}
                        style={Styles.imageStyle}
                    />
                    <Text style={Styles.bottomText}>My Learning</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.bottom_Icons} onPress={() => { setselectTab(3) }}>
                    <Image
                        source={selecteTab == 3 ? require('../image/whishlist_fill.png') : require('../image/whishlist.png')}
                        style={Styles.imageStyle}
                    />
                    <Text style={Styles.bottomText}>Whishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.bottom_Icons} onPress={() => { setselectTab(4) }}>
                    <Image
                        source={selecteTab == 4 ? require('../image/user_fill.png') : require('../image/user.png')}
                        style={Styles.imageStyle}
                    />
                    <Text style={Styles.bottomText}>User</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Main;

const Styles = StyleSheet.create({
    bottomTabContainer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#fff",
        height: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    bottom_Icons: {
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        width: 34,
        height: 34
    },
    bottomText: {
        fontSize: 16,
        color: "black"
    }
})