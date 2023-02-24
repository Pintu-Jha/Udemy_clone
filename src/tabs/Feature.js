import { View, TouchableOpacity, StyleSheet, Text, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const featureCourses = [
  {
    title: "learn python in 30 days",
    image: "https://www.bleepstatic.com/content/hl-images/2022/05/02/python-blue-header.jpg",
    tutor: "Shakti Singh",
    price: "3999",
    discountPrice: "1299",
    rating: "5.0",
    totalRating: "150",
    isBestSeller: false,
  },
  {
    title: "learn react in 30 days",
    image: "https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png ",
    tutor: "Ashish Mishra",
    price: "3999",
    discountPrice: "599",
    rating: "4.2",
    totalRating: "300",
    isBestSeller: true,
  },
  {
    title: "learn react native full Course",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg",
    tutor: "Pintu Jha",
    price: "3999",
    discountPrice: "1999",
    rating: "4.8",
    totalRating: "1500",
    isBestSeller: true,
  },
  {
    title: "learn C++ in 30 days",
    image: "https://www.simplilearn.com/ice9/webinar_thum_image/CPP_Tutorial.jpg",
    tutor: "Vinayak Mishra",
    price: "3999",
    discountPrice: "999",
    rating: "3.4",
    totalRating: "200",
    isBestSeller: true,
  },
  {
    title: "learn Java in 30 days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkruDh52xPjFuuYPYjmPY1PvRTcp9OsbvfPg&usqp=CAU ",
    tutor: "Jagdish Yadav",
    price: "3999",
    discountPrice: "699",
    rating: "4.9",
    totalRating: "250",
    isBestSeller: true,
  },
]

const Feature = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>

          <Image
            source={require("../image/laughWoman_feature.png")}
            style={{ width: "100%", height: 250 }}
          />
          <Text style={{ fontSize: 40, color: "#000", fontWeight: "700", marginLeft: 15, marginTop: 15 }}>{"Learn From\nTheir experiances"}</Text>
          <Text style={{ color: "#000", marginLeft: 15, marginTop: 8, fontWeight: "700" }}>{'relating to the nerves or nervous system;taining to, situated in the region of, or on the side with, the neural, or cerebro-spinal, saxis; -- opposed to hemal. As applied to vertebrates, neural is the same as doopposed tohemal. As applied to vertebrates, neural is the same.'}</Text>
          <TouchableOpacity style={Styles.offerHeadLine}>
            <Text style={{ color: "#000", fontSize: 18, }}>Learn from Experts</Text>
            <Text style={{ color: "#000", fontSize: 18, fontWeight: "800" }}>End in 1Day</Text>
          </TouchableOpacity>
          <Text style={Styles.featureTextStyle}>Featured</Text>

          <View style={{ width: "100%", marginLeft: 10, marginBottom: 150 }}>
            <FlatList

              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={featureCourses}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={Styles.featureStyle}
                    onPress={() => {
                      navigation.navigate("viewCourse", {
                        data: item,
                      })
                    }}>
                    <View style={Styles.features}>
                      <Image
                        source={{
                          uri: item.image
                        }}
                        style={{ width: "100%", height: 150 }}
                      />
                      <Text style={{ fontSize: 20, color: "#000", fontWeight: "600", marginTop: 10 }}>{item.title}</Text>
                      <Text style={{ fontSize: 15, color: "#808080", fontWeight: "700", }}>{item.tutor}</Text>

                      <View style={{ flexDirection: "row", width: "100%", alignItems: "center" }}>
                        <Text style={{ fontSize: 12, color: "#000" }}>{item.rating}</Text>
                        <Image source={require('../image/rating.png')}
                          style={{ width: 15, height: 15, marginLeft: 2 }}
                        />
                        <Image source={require('../image/rating.png')}
                          style={{ width: 15, height: 15, marginLeft: 2 }}
                        />
                        <Image source={require('../image/rating.png')}
                          style={{ width: 15, height: 15, marginLeft: 2 }}
                        />
                        <Image source={require('../image/rating.png')}
                          style={{ width: 15, height: 15, marginLeft: 2 }}
                        />
                        <Text style={{ color: "#000" }}>{'(' + item.totalRating + ')'}</Text>
                      </View>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 17, color: "#000", fontWeight: "bold", marginTop: 5 }}>{"₹" + item.discountPrice}</Text>
                        <Text style={{ fontSize: 17, color: "#000", textDecorationLine: "line-through", marginLeft: 10, marginTop: 5 }}>{item.price}</Text>
                      </View>
                      {item.isBestSeller ? (
                        <View style={Styles.bestSellerTage}>
                          <Text style={{ color: "#000" }}>Best Seller</Text>
                        </View>
                      ) : null}

                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={Styles.signButton}>
        <Text style={Styles.signButtonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Feature;

const Styles = StyleSheet.create({
  signButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  signButtonText: {
    color: "#fff",
  },
  offerHeadLine: {
    width: "90%",
    height: 80,
    marginTop: 20,
    backgroundColor: "#b3b300",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  featureTextStyle: {
    color: "#000",
    fontSize: 30,
    fontWeight: "800",
    marginLeft: 20,
    marginTop: 20
  },
  featureStyle: {
    width: 300,
    marginLeft: 10,
    marginTop: 10
  },
  features: {
    width: "100%",
    height: "100%"
  },
  bestSellerTage: {
    backgroundColor: "#b3b300",
    width: 90,
    height: 25,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  }

})
