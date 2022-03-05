import {
  View,
  Text as RNText,
  Image,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import tw, { useDeviceContext } from "twrnc";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const primary = "#871DF1";
const background = "#081430";

const Events = () => {
  return (
    <LinearGradient style={tw`flex-1 bg-[${background}]`} colors={[primary, background, primary]}>
      <StatusBar style="light" />
      <View style={tw`flex-1`}>
        <View style={tw`flex-1`}>
          <SafeAreaView style={tw`flex-row justify-between`}>
            <Ionicons name="list" color="white" size={28} style={tw`m-5`} />
            <Ionicons name="notifications" color="white" size={22} style={tw`m-5`} />
          </SafeAreaView>
          <View style={tw`m-5`}>
            <BlurView style={tw`flex-row p-3 items-center rounded-xl overflow-hidden`}>
              <Ionicons name="search" color={tw.color("bg-gray-300")} size={30} style={tw`mr-3`} />
              <RNText style={tw`text-gray-300`}>Search by person</RNText>
            </BlurView>
          </View>
          <ScrollView style={tw`flex-1`} horizontal>
            <View style={tw`bg-[${primary}] rounded-3xl p-3 m-2`}>
              <RNText style={tw`text-white`}>🎸 Musicians</RNText>
            </View>
            <View style={tw`bg-[${background}] rounded-3xl p-3 m-2`}>
              <RNText style={tw`text-white`}>😆 Comedians</RNText>
            </View>
            <View style={tw`bg-[${background}] rounded-3xl p-3 m-2`}>
              <RNText style={tw`text-white`}>🎤 Singers</RNText>
            </View>
          </ScrollView>
        </View>
        <View style={tw`flex-1`}></View>
      </View>
      <View style={tw``}>
        <BlurView
          style={tw`bg-[${background}] bg-opacity-70 rounded-3xl flex-row overflow-hidden h-23`}
          intensity={20}
          tint="light"
        >
          <View style={tw`flex-1 m-1 items-center justify-center`}>
            <Ionicons name="home" size={20} color={primary} />
            <Ionicons size={5} name="ellipsis-horizontal-circle-sharp" color={primary} />
          </View>
          <View style={tw`flex-1 m-1 items-center justify-center`}>
            <Ionicons name="book" size={20} color={tw.color("bg-gray-400")} />
          </View>
          <View style={tw`flex-1 m-1 items-center justify-center`}>
            <Ionicons name="musical-note" size={20} color={tw.color("bg-gray-400")} />
          </View>
          <View style={tw`flex-1 m-1 items-center justify-center`}>
            <Ionicons name="person" size={20} color={tw.color("bg-gray-400")} />
          </View>
        </BlurView>
      </View>
    </LinearGradient>
  );
};

export default Events;
