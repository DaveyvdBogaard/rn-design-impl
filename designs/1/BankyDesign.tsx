import React, { useState } from "react";
import {
  View,
  Image,
  Text as RNText,
  SafeAreaView,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import tw, { useDeviceContext } from "twrnc";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

const width = Dimensions.get("window").width;

const colorList = [
  { offset: "0%", color: "#231557", opacity: "1" },
  { offset: "29%", color: "#44107A", opacity: "1" },
  { offset: "67%", color: "#FF1361", opacity: "1" },
  { offset: "100%", color: "#FFF800", opacity: "1" },
];

const Text = (props: any) => {
  return <RNText {...props} style={[props.style, { fontFamily: "Young" }]} />;
};

const BankyDesign = () => {
  useDeviceContext(tw);
  const [loaded] = useFonts({
    Young: require("./assets/Young.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar style="dark"/>
      <View style={tw`mx-5 flex-1`}>
        <View style={tw`flex-row justify-between`}>
          <Pressable style={tw`flex-row items-center px-5 rounded-full border border-gray-200`}>
            <MaterialCommunityIcons name="arrow-left" size={20} />
            <Text style={tw`pl-2`}>Back</Text>
          </Pressable>
          <Pressable
            style={tw`flex-row items-center w-13 h-13 items-center justify-center rounded-full border border-gray-200`}
          >
            <Ionicons name="chatbubble-ellipses-outline" size={22} />
          </Pressable>
        </View>
        <View style={tw`mt-4`}>
          <Text style={tw`text-3xl`}>Choose a card</Text>
          <Text style={tw`text-gray-400`}>Choose a card that fits your needs.</Text>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={tw`overflow-visible`}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <LinearGradient
              // Background Linear Gradient
              colors={["#E67669", "#776EDD"]}
              // locations={[0.1, 0.3, 0.5, 1]}
              // colors={["#FFF", "#776EDD", "#C7708C", "#E67669", "#FFF"]}
              end={{ x: 1, y: 0.5 }}
              // start={{ x: 0.1, y: 1 }}
              style={tw.style(`rounded-xl p-6 w-screen flex-1 m-2 ml-0`, {
                width: width * 0.85,
              })}
            >
              <View style={tw`flex-row`}>
                <View style={tw`flex-1 justify-center items-start mb-24`}>
                  <View style={tw`items-center justify-center`}>
                    <Image
                      source={require("./assets/cc-chip-light-gray.png")}
                      style={tw`h-7 w-10`}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <View style={tw`flex-1 items-end`}>
                  <MaterialCommunityIcons name="contactless-payment" size={24} color="white" />
                </View>
              </View>
              <View style={tw`flex-row`}>
                <View style={tw`flex-1 justify-end`}>
                  <Text style={tw`text-white text-lg`}>···· 8250</Text>
                </View>
                <View style={tw`flex-1 justify-center items-end`}>
                  <View style={tw`items-center justify-center`}>
                    <Image
                      source={require("./assets/visa.png")}
                      style={tw`h-7 w-15`}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            </LinearGradient>
          </ScrollView>
          <View style={tw`justify-center flex-row items-center`}>
            <View style={tw`w-1 h-1 bg-gray-400 rounded-full mr-1`} />
            <View style={tw`w-1 h-3 bg-black rounded-full mr-1`} />
            <View style={tw`w-1 h-1 bg-gray-400 rounded-full mr-1`} />
            <View style={tw`w-1 h-1 bg-gray-400 rounded-full mr-1`} />
          </View>
        </View>
        <View style={tw`my-2`}>
          <View style={tw`flex-row justify-between items-end`}>
            <View>
              <Text style={tw`text-gray-400`}>CREDIT CARD</Text>
              <Text style={tw`text-2xl`}>Virtual card</Text>
            </View>
            <View>
              <Text style={tw`text-2xl`}>
                <Text style={tw`text-base`}>$</Text>
                4.99
                <Text style={tw`text-gray-400 text-sm`}>/month</Text>
              </Text>
            </View>
          </View>
          <ScrollView
            horizontal
            pagingEnabled
            style={tw`overflow-visible`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10 }}
          >
            <View
              style={tw.style(`rounded-xl border border-gray-200 py-3 px-2 w-screen m-2 ml-0`, {
                width: width * 0.55,
                height: width * 0.4,
              })}
            >
              <View style={tw`rounded-full bg-gray-100 w-11 h-11 items-center justify-center`}>
                <Ionicons name="cart-outline" size={17} />
              </View>
              <View style={tw`flex-1 justify-end`}>
                <Text style={tw`text-lg`}>3% Cashback</Text>
                <Text style={tw`text-gray-400`}>For any market</Text>
              </View>
            </View>
            <View
              style={tw.style(`rounded-xl border border-gray-200 py-3 px-2 w-screen m-2 ml-0`, {
                width: width * 0.6,
                height: width * 0.4,
              })}
            >
              <View style={tw`rounded-full bg-gray-100 w-11 h-11 items-center justify-center`}>
                <Ionicons name="return-up-back-outline" size={17} />
              </View>
              <View style={tw`flex-1 justify-end`}>
                <Text style={tw`text-lg`}>Incoming and outgoing</Text>
                <Text style={tw`text-gray-400`}>Without commission</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={tw`flex-1`}>
          <Pressable style={tw`bg-indigo-500 items-center py-4`}>
            <Text style={tw`text-white text-lg`}>Next</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BankyDesign;
