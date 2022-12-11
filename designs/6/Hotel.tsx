import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import tw, { useDeviceContext } from "twrnc";

const Stack = createNativeStackNavigator();

const Hotel = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HotelSignup" component={HotelSignup} />
      <Stack.Screen name="HotelHome" component={HotelHome} />
    </Stack.Navigator>
  );
};

const HotelSignup = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 bg-white`}>
      <StatusBar style="light" />
      <ImageBackground source={require("./assets/opt1.jpeg")} style={tw`flex-1`}>
        <SafeAreaView style={tw`flex-1 mx-8 justify-between`}>
          <View style={tw`flex-1 mt-4`}>
            <Text style={tw`mb-16 text-white font-bold text-xl`}>Tamago</Text>
            <View style={tw`w-3/4`}>
              <Text style={tw`mb-4 text-white font-bold text-4xl`}>
                Find your perfect place to stay
              </Text>
              <Text style={tw`mb-16 text-white font-normal text-base`}>
                Find your hotel easily and travel anywhere you want with us.
              </Text>
            </View>
          </View>
          <View style={tw`mb-8`}>
            <Pressable
              style={tw`items-center mb-4 bg-blue-400 rounded-xl py-4`}
              onPress={() => navigation.navigate("HotelHome")}
            >
              <Text style={tw`text-white font-medium text-xl`}>Sign up</Text>
            </Pressable>
            <Text style={tw`font-medium text-lg text-center`}>
              Already have an account? <Text style={tw`text-blue-400`}>Log in</Text>
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const HotelHome = () => {
  return (
    <View style={tw`bg-gray-100 flex-1`}>
      <StatusBar style="dark" />
      <SafeAreaView style={tw`flex-1`}>
        <ScrollView style={tw`flex-1 px-8`}>
          <View style={tw`flex-row my-4`}>
            <View style={tw`flex-1 flex-row bg-white shadow-md rounded-xl p-2 items-center`}>
              <Text style={tw`mx-4`}>o</Text>
              <Text style={tw`text-gray-500`}>Search...</Text>
            </View>
            <View
              style={tw`relative bg-white shadow-md rounded-xl p-2 w-12 h-12 items-center justify-center ml-4`}
            >
              <Text>B</Text>
              <View style={tw`w-3 h-3 bg-red-500 absolute top-0 right-0 rounded-full`} />
            </View>
          </View>
          <View style={tw`flex-row justify-between my-2`}>
            <Text style={tw`text-blue-500 font-medium text-lg`}>Hotel</Text>
            <Text style={tw`text-gray-500 font-medium text-lg`}>Motel</Text>
            <Text style={tw`text-gray-500 font-medium text-lg`}>Villa</Text>
            <Text style={tw`text-gray-500 font-medium text-lg`}>Home</Text>
          </View>
          <View style={tw`my-4 bg-white shadow-md rounded-xl flex-row px-4 py-4 justify-between`}>
            <Text style={tw`text-gray-500`}>a</Text>
            <Text style={tw``}>2 Adults</Text>
            <View style={tw`border border-gray-300`} />
            <Text style={tw`text-gray-500`}>b</Text>
            <Text style={tw``}>Jul 12 - Jul 14</Text>
            <View style={tw`border border-gray-300`} />
            <Text style={tw`text-gray-500`}>s</Text>
          </View>
          <View style={tw`h-80`}>
            <ScrollView horizontal style={tw`my-4 -mx-8 pl-8 flex-1`}>
              <View style={tw`w-42 h-70 mr-8`}>
                <View style={tw`flex-1 mb-4 rounded-xl overflow-hidden relative`}>
                  <Image source={require("./assets/opt1.jpeg")} style={tw`flex-1 w-42 h-30`} />
                  <View style={tw`absolute top-2 right-2 bg-yellow-500 rounded-xl p-1`}>
                    <Text style={tw`text-white text-sm`}>
                      <Text>S</Text> 3.8
                    </Text>
                  </View>
                </View>
                <Text style={tw`mb-2 font-bold text-lg`}>Shikara Hotel</Text>
                <Text style={tw`text-gray-500`}>
                  <Text style={tw`text-blue-500`}>A</Text> JL. Mandala No, 117...
                </Text>
              </View>
              <View style={tw`w-42 h-70 mr-8`}>
                <View style={tw`flex-1 mb-4 rounded-xl overflow-hidden relative`}>
                  <Image source={require("./assets/opt2.jpeg")} style={tw`flex-1 w-42 h-30`} />
                  <View style={tw`absolute top-2 right-2 bg-yellow-500 rounded-xl p-1`}>
                    <Text style={tw`text-white text-sm`}>
                      <Text>S</Text> 3.8
                    </Text>
                  </View>
                </View>
                <Text style={tw`mb-2 font-bold text-lg`}>Visala Hotel</Text>
                <Text style={tw`text-gray-500`}>
                  <Text style={tw`text-blue-500`}>A</Text> JL. Kebon No, 117...
                </Text>
              </View>
              <View style={tw`w-42 h-70 mr-8`}>
                <View style={tw`flex-1 mb-4 rounded-xl overflow-hidden relative`}>
                  <Image source={require("./assets/opt1.jpeg")} style={tw`flex-1 w-42 h-30`} />
                  <View style={tw`absolute top-2 right-2 bg-yellow-500 rounded-xl p-1`}>
                    <Text style={tw`text-white text-sm`}>
                      <Text>S</Text> 3.8
                    </Text>
                  </View>
                </View>
                <Text style={tw`mb-2 font-bold text-lg`}>Shikara Hotel</Text>
                <Text style={tw`text-gray-500`}>
                  <Text style={tw`text-blue-500`}>A</Text> JL. Mandala No, 117...
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={tw`my-4 flex-row justify-between`}>
            <Text style={tw`text-xl font-bold`}>Best Offers</Text>
            <Text style={tw`text-lg text-gray-500`}>See all</Text>
          </View>
          <View style={tw`my-2 flex-row rounded-xl p-2 bg-white shadow-md`}>
            <View style={tw`rounded-tl-xl rounded-bl-xl overflow-hidden mr-4`}>
              <Image source={require("./assets/opt1.jpeg")} style={tw`w-25 h-30`} />
            </View>
            <View style={tw`flex-1 justify-between`}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`mb-2 font-bold text-lg`}>Visala Hotel</Text>
                <Text style={tw`text-yellow-500 text-sm`}>
                  <Text>S</Text> 3.8
                </Text>
              </View>
              <Text style={tw`text-gray-500`}>
                <Text style={tw`text-blue-500`}>A</Text> JL. Mandala No, 117...
              </Text>
              <Text style={tw`font-bold`}>$50</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View
        style={tw`flex-1 shadow-sm bg-white absolute bottom-0 right-0 p-4 h-25 w-full flex-row justify-between`}
      >
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`items-center`}>A</Text>
        </View>
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`items-center`}>A</Text>
        </View>
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`items-center`}>A</Text>
        </View>
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`items-center`}>A</Text>
        </View>
      </View>
    </View>
  );
};

export default Hotel;
