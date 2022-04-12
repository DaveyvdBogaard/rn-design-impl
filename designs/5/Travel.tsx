import { View, Text, ScrollView, Image, SafeAreaView, ImageBackground } from "react-native";
import tw, { useDeviceContext } from "twrnc";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Travel = () => {
  return (
    <View style={tw``}>
      <SafeAreaView style={tw`bg-yellow-500 rounded-b-3xl`}>
        <View style={tw`px-6`}>
          <Ionicons name="menu" color="white" size={30} />
          <View style={tw`flex-row items-center`}>
            <View style={tw`flex-1 py-4`}>
              <Text style={tw`text-white text-3xl font-semibold py-1`}>Find your location &</Text>
              <Text style={tw`text-white text-4xl font-bold py-1`}>Explore</Text>
            </View>
            <View style={tw``}>
              <Image
                source={require("./assets/speaker-3.jpeg")}
                style={tw`h-12 w-12 rounded-full bg-white`}
                resizeMode="contain"
              />
              <View
                style={tw`absolute -top-1 -right-1 rounded-full bg-white w-5 h-5 items-center justify-center`}
              >
                <Text>2</Text>
              </View>
            </View>
          </View>
          <View style={tw`rounded-full bg-opacity-50 bg-white p-8 py-4 items-center my-3`}>
            <Text style={tw`text-white font-semibold`}>Where do you want to go?</Text>
          </View>
          <View style={tw`flex-row pt-8 pb-10 justify-between`}>
            <View style={tw``}>
              <View style={tw`rounded-full bg-white w-12 h-12 items-center justify-center`}>
                <Ionicons name="airplane" size={20} color={tw.color("bg-yellow-500")} />
              </View>
            </View>
            <View style={tw``}>
              <View style={tw`rounded-full bg-white w-12 h-12 items-center justify-center`}>
                <Ionicons name="car" size={20} color={tw.color("bg-yellow-500")} />
              </View>
            </View>
            <View style={tw``}>
              <View style={tw`rounded-full bg-white w-12 h-12 items-center justify-center`}>
                <Ionicons name="bicycle" size={20} color={tw.color("bg-yellow-500")} />
              </View>
            </View>
            <View style={tw``}>
              <View style={tw`rounded-full bg-white w-12 h-12 items-center justify-center`}>
                <Ionicons name="train" size={20} color={tw.color("bg-yellow-500")} />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={tw`font-semibold text-2xl pr-8`}>Popular</Text>
        <Text style={tw`font-semibold text-xl pr-8 text-gray-500`}>Trending</Text>
        <Text style={tw`font-semibold text-xl pr-8 text-gray-500`}>Recommended</Text>
      </ScrollView>
      <ScrollView
        horizontal
        contentContainerStyle={{ padding: 20, justifyContent: "center", alignItems: "center" }}
      >
        <View style={tw.style(`w-55 h-80 bg-white mr-7`, { borderRadius: 50 })}>
          <Image
            style={tw.style(`w-55 h-80`, { borderRadius: 50 })}
            source={require("./assets/giza.png")}
          />
          <View
            style={tw.style(`absolute bottom-0 left-0 bg-white p-3 pb-4 pl-5 pr-10`, {
              borderBottomLeftRadius: 50,
              borderTopRightRadius: 45,
              borderBottomRightRadius: 45,
              borderTopLeftRadius: 0,
            })}
          >
            <Text style={tw`font-medium text-lg text-gray-400`}>Egyptian</Text>
            <Text style={tw`pb-1 font-semibold text-xl`}>Pyramids</Text>
            <View style={tw`flex-row items-center`}>
              <Ionicons name="star" size={15} color="gold" />
              <Text>4.45 (1.3k people)</Text>
            </View>
          </View>
        </View>
        <View style={tw.style(`w-55 h-80 bg-white`, { borderRadius: 50 })}>
          <Image
            style={tw.style(`w-55 h-80`, { borderRadius: 50 })}
            source={require("./assets/jordan.png")}
          />
          <View
            style={tw.style(`absolute bottom-0 left-0 bg-white p-3 pb-4 pl-5 pr-10`, {
              borderBottomLeftRadius: 50,
              borderTopRightRadius: 45,
              borderBottomRightRadius: 45,
              borderTopLeftRadius: 0,
            })}
          >
            <Text style={tw`font-medium text-lg text-gray-400`}>Petra</Text>
            <Text style={tw`pb-1 font-semibold text-xl`}>Jordan</Text>
            <View style={tw`flex-row items-center`}>
              <Ionicons name="star" size={15} color="gold" />
              <Text>4.45 (1.3k people)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Travel;
