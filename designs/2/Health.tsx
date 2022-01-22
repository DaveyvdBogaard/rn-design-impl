import { View, Text, Image, SafeAreaView, ImageBackground, ScrollView } from "react-native";
import tw, { useDeviceContext } from "twrnc";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const Health = () => {
  return (
    <View style={tw`bg-gray-900 flex-1`}>
      <View style={tw`h-69 rounded-b-3xl bg-red-100`}>
        {/* <BackDrop /> */}

        <ImageBackground
          style={tw`flex-row flex-1 justify-center items-center`}
          source={require("./assets/radial2.png")}
          resizeMode="cover"
        >
          <View style={tw`flex-1 justify-center items-end`}>
            <View style={tw`h-32 w-32`}>
              <Image source={require("./assets/heart.png")} style={tw`h-32 w-32`} />
              <View
                style={tw`absolute bottom-0 right-2 w-10 h-10 rounded-xl bg-white justify-center items-center`}
              >
                <Ionicons name="reload" size={20} />
              </View>
            </View>
          </View>
          <View style={tw`flex-1 ml-4`}>
            <Text style={tw`text-6xl font-bold`}>96</Text>
            <Text>
              bpm <Text style={tw`text-gray-400`}>5 sec ago</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
      <ScrollView horizontal style={tw`flex-1 p-5 flex-row`}>
        <View style={tw``}>
          <View style={tw`justify-between flex-1 mb-5`}>
            <Text style={tw`text-gray-300`}>200</Text>
            <Text style={tw`text-gray-300`}>145</Text>
            <Text style={tw`text-gray-300`}>90</Text>
          </View>
        </View>
        <View style={tw`flex-1 w-100`}>
          <View style={tw`flex-1 justify-between p-5`}>
            <View style={tw`w-full border-t border-gray-700`}></View>
            <View style={tw`w-full border-t border-gray-700`}></View>
            <View style={tw`w-full border-t border-gray-700`}></View>
            <View style={tw`w-full border-t border-gray-700`}></View>
          </View>
          <View style={tw`absolute -left-8 w-full top-10`}>
              <View style={tw`bg-red-200 h-10 rounded-3xl w-10 h-5 items-center justify-center`}>
                  <Text>105</Text>
              </View>
              <View style={tw`border-t border-red-200 w-full border-dotted h-1`}></View>
          </View>
          <View style={tw`justify-between flex-row ml-6`}>
            <Text style={tw`text-gray-300`}>6</Text>
            <Text style={tw`text-gray-300`}>8</Text>
            <Text style={tw`text-gray-300`}>10</Text>
            <Text style={tw`text-gray-300`}>12</Text>
            <Text style={tw`text-gray-300`}>14</Text>
            <Text style={tw`text-gray-300`}>16</Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView horizontal style={tw`flex-1 p-4`}>
        <ImageBackground
          style={tw`bg-purple-400 w-40 h-40 rounded-3xl p-5 mr-6`}
          source={require("./assets/stripes2.png")}
          resizeMode="cover"
        >
          <View
            style={tw`absolute top-5 right-5 h-9 w-9 rounded-xl bg-white items-center justify-center`}
          >
            <Ionicons name="moon" color={tw.color("bg-purple-400")} size={20} />
          </View>
          <View style={tw`flex-1 justify-start pt-3`}>
            <Text style={tw`text-purple-900 font-bold`}>Sleep</Text>
          </View>
          <View style={tw`flex-2 justify-end`}>
            <Text style={tw`text-5xl text-white font-bold`}>7</Text>
            <Text style={tw`text-gray-100`}>hours</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={tw`bg-pink-400 w-55 h-40 rounded-3xl p-5`}
          source={require("./assets/stripes2.png")}
          resizeMode="cover"
        >
          <View
            style={tw`absolute top-5 right-5 h-9 w-9 rounded-xl bg-white items-center justify-center`}
          >
            <Ionicons name="walk-outline" color={tw.color("bg-pink-400")} size={20} />
          </View>
          <View style={tw`flex-1 justify-start pt-3`}>
            <Text style={tw`text-pink-900 font-bold`}>Walking</Text>
          </View>
          <View style={tw`flex-2 justify-end`}>
            <Text style={tw`text-5xl text-white font-bold`}>3.080</Text>
            <Text style={tw`text-gray-100`}>steps</Text>
          </View>
        </ImageBackground>
      </ScrollView>
      <View style={tw`flex-row p-5`}>
        <View style={tw`flex-1 h-14 m-4 rounded-3xl bg-gray-700 justify-center items-center`}>
          <Text style={tw`text-gray-300`}>1d</Text>
        </View>
        <View style={tw`flex-1 h-14 m-4 rounded-3xl bg-white justify-center items-center`}>
          <Text style={tw`text-gray-900`}>1m</Text>
        </View>
        <View style={tw`flex-1 h-14 m-4 rounded-3xl bg-gray-700 justify-center items-center`}>
          <Text style={tw`text-gray-300`}>1y</Text>
        </View>
        <View style={tw`flex-1 h-14 m-4 rounded-3xl bg-gray-700 justify-center items-center`}>
          <Text style={tw`text-gray-300`}>All</Text>
        </View>
      </View>
    </View>
  );
};

export default Health;
