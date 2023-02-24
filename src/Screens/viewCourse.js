import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Viewport } from '@skele/components'

const ViewportAwareTouchableOpacity = Viewport.Aware(TouchableOpacity)
const ViewCourse = () => {
    const route = useRoute();
    const [footerVisbale, setFooterVisbale] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Viewport.Tracker>
                <ScrollView style={{ flex: 1 }}>
                    <Image source={{ uri: route.params.data.image }}
                        style={{ width: "95%", height: 280, marginTop: 10, alignSelf: "center" }} />

                    <Text
                        style={{ fontSize: 30, fontWeight: 600, marginTop: 10, marginLeft: 10, color: "gray" }}>
                        {route.params.data.title}</Text>
                    <Text
                        style={{ fontSize: 20, fontWeight: 500, marginLeft: 10, color: "gray" }}>
                        {"Hey i will teach you in this course step by step to make a project"}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "black", fontSize: 20, fontWeight: 700, marginLeft: 10, marginTop: 10 }}>
                            {route.params.data.rating}
                            <Image source={require('../image/rating.png')}
                                style={{ width: 20, height: 20, marginLeft: 7 }}
                            />
                            <Image source={require('../image/rating.png')}
                                style={{ width: 20, height: 20, marginLeft: 7 }}
                            />
                            <Image source={require('../image/rating.png')}
                                style={{ width: 20, height: 20, marginLeft: 7 }}
                            />
                            <Image source={require('../image/rating.png')}
                                style={{ width: 20, height: 20, marginLeft: 7 }}
                            />
                            <Image source={require('../image/rating.png')}
                                style={{ width: 20, height: 20, marginLeft: 7 }}
                            />
                        </Text>
                    </View>
                    <Text style={{ color: "black", marginLeft: 10, fontSize: 20, marginTop: 8 }}>{"(15,345 Rating) 17,084 student"}</Text>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 20, color: "gray" }}>posted by</Text>
                        <Text style={{ fontSize: 20, marginTop: 15, fontWeight: "bold", color: "purple" }}>{' ' + route.params.data.tutor}</Text>
                    </View>


                    <View style={{ marginTop: 10 }}>
                        <FlatList
                            data={[
                                {
                                    title: "Last update 20 March 2020",
                                    icon: require("../image/info.png")
                                },
                                {
                                    title: "English",
                                    icon: require("../image/language.png")
                                },
                                {
                                    title: "English",
                                    icon: require("../image/caption.png")
                                }
                            ]}

                            renderItem={({ item, index }) => {

                                return (
                                    <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 15, alignItems: "center" }}>
                                        <Image
                                            source={item.icon}
                                            style={{ width: 28, height: 28, tintColor: "#8e8e8e" }}
                                        />
                                        <Text style={{ color: "black", marginLeft: 8, fontSize: 20 }}>{item.title}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <Text
                        style={{ color: "black", fontSize: 35, fontWeight: 800, marginLeft: 10, marginTop: 15 }}>
                        {"₹" + route.params.data.discountPrice}
                    </Text>
                    <TouchableOpacity
                        style={{ backgroundColor: "purple", width: "90%", height: 50, alignItems: "center", alignSelf: "center", marginTop: 50, justifyContent: "center" }}>
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>Buy Now</Text>
                    </TouchableOpacity>
                    <ViewportAwareTouchableOpacity
                        onViewportEnter={() => setFooterVisbale(false)}
                        onViewportLeave={() => setFooterVisbale(true)}
                        style={{ width: "90%", height: 50, alignItems: "center", alignSelf: "center", marginTop: 20, justifyContent: "center", borderWidth: 1 }}>
                        <Text style={{ color: "#000", fontSize: 20, fontWeight: 600 }}>Add To Cart</Text>
                    </ViewportAwareTouchableOpacity>
                    <Text style={{ color: "black", fontSize: 35, fontWeight: "bold", marginLeft: 15, marginTop: 15 }}>Curriculum</Text>
                    <View>
                        <Text style={{ color: "black", marginTop: 8, marginLeft: 15, fontSize: 20 }}>{"10 Section, 64 leatures, 9 hours"}</Text>
                    </View>
                    <View>
                        <FlatList
                            data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1]}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ flexDirection: "row", width: "100%", height: 70, marginTop:15,justifyContent:"space-between"}}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ color: "black", fontSize: 25, marginLeft: 45 }}>{index + 1}</Text>
                                            <View style={{marginLeft:10}}>
                                                <Text style={{color:"black",fontSize:30}}>{"Video"+(index + 1)}</Text>
                                                <View style={{flexDirection:"row"}}> 
                                                    <Text style={{color:"black",fontSize:20}}>{"Video "+ (index + 1) + " min"}</Text>
                                                    <Image source={require("../image/caption.png")} style={{marginLeft:5,alignSelf:"center",height:18,width:18}}/>
                                                </View>
                                        </View>
                                    </View>
                                    <Image source={require("../image/play.png")} style={{height:28,width:28,marginRight:15,tintColor:"purple",alignSelf:"center"}}/>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    
                </ScrollView>
            </Viewport.Tracker>
            {
                footerVisbale ? (
                    <View style={{ width: "100%", height: 70, backgroundColor: "#f7e6ff", position: "absolute", bottom: 0 }}>
                        <View style={{ width: "100%", height: "100%", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                            <Text
                                style={{ color: "black", fontSize: 35, fontWeight: 800, marginLeft: 10 }}>
                                {"₹" + route.params.data.discountPrice}
                            </Text>
                            <TouchableOpacity style={{ width: "60%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "purple" }}>
                                <Text style={{ color: "#fff" }}>Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}
        </View>
    );
};

export default ViewCourse;
