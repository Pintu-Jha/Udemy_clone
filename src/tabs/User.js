import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const User = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>Account</Text>
      </View>
      <Text style={{ fontSize: 18, marginLeft: 15, marginTop: 20, color: "#000" }}>Support</Text>
      <View>
        <FlatList
          data={[{ title: 'About Udemy', isIcon: true, }, { title: 'About Udemy Business', isIcon: true }, { title: 'Help and Support', isIcon: false }, { title: 'Share theUdemy app', isIcon: false }]}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={Styles.flatlistItem}>
                <View style={Styles.allText}>
                  <Text style={{ color: "#000", fontSize: 22, marginLeft: 16, marginTop: 15 }}>{item.title}</Text>
                  {item.isIcon ? (<Image source={require("../image/rightArrow.png")} style={Styles.iconStyle} />) : null}
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <TouchableOpacity>
        <Text style={Styles.SignText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={Styles.versionStyle}>Udemy v.3277.44</Text>
    </View>
  )
}

export default User;

const Styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#BEBEBE",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  headerText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "700"
  },
  flatlistItem: {
    width: "100%",
    height: 60,
  },
  allText: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconStyle: {
    width: 22,
    height: 22,
    marginRight: 16,
    tintColor: "#1a1a1a",
    marginTop: 15
  },
  SignText: {
    alignSelf: "center",
    color: "#2d2d86",
    fontSize: 20,
    marginTop: 20
  },
  versionStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: "#000",
    marginTop: 17
  }
})