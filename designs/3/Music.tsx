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
import {
  useFonts,
  BeVietnam_100Thin,
  BeVietnam_300Light,
  BeVietnam_400Regular,
  BeVietnam_500Medium,
  BeVietnam_600SemiBold,
  BeVietnam_700Bold,
} from "@expo-google-fonts/be-vietnam";
import { SquircleView } from "react-native-figma-squircle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Text = (props: any) => {
  return <RNText {...props} style={[props.style, { fontFamily: "BeVietnam_400Regular" }]} />;
};
const ThinText = (props: any) => {
  return <RNText {...props} style={[props.style, { fontFamily: "BeVietnam_100Thin" }]} />;
};
const LightText = (props: any) => {
  return <RNText {...props} style={[props.style, { fontFamily: "BeVietnam_300Light" }]} />;
};
const MediumText = (props: any) => {
  return <RNText {...props} style={[props.style, { fontFamily: "BeVietnam_500Medium" }]} />;
};
const SemiBoldText = (props: any) => {
  return <RNText {...props} style={[props.style, { fontFamily: "BeVietnam_600SemiBold" }]} />;
};
const BoldText = (props: any) => {
  return <RNText {...props} style={[props.style, { fontFamily: "BeVietnam_700Bold" }]} />;
};

const Stack = createNativeStackNavigator();

const Music = () => {
  const [loaded] = useFonts({
    BeVietnam_100Thin,
    BeVietnam_300Light,
    BeVietnam_400Regular,
    BeVietnam_500Medium,
    BeVietnam_600SemiBold,
    BeVietnam_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={MusicGetStarted} />
      <Stack.Screen name="MusicHome" component={MusicHome} />
    </Stack.Navigator>
  );

  // return <MusicHome />;
  // return <MusicGetStarted />;
};

const width = Dimensions.get("window").width;

const HomeCard = (props: any) => {
  return (
    <View style={tw.style(`flex-1 p-2 pb-5 mb-1`, { width: width / 2.25 })}>
      <SquircleView
        style={tw`flex-1 px-4 pt-5 pb-9`}
        squircleParams={{
          cornerSmoothing: 0.9,
          cornerRadius: 30,
          fillColor: tw.color(`bg-${props.color}-200`),
        }}
      >
        <SemiBoldText style={tw`text-xl`}>{props.text}</SemiBoldText>
        <LightText>{props.description}</LightText>
      </SquircleView>
      <SquircleView
        style={tw`absolute bottom-0 left-5 w-10 h-10 items-center justify-center shadow-md`}
        squircleParams={{
          cornerSmoothing: 0.9,
          cornerRadius: 10,
          fillColor: "#FFFFFF",
        }}
      >
        <Ionicons size={25} name="chevron-forward" />
      </SquircleView>
    </View>
  );
};

const MusicHome = () => {
  return (
    <View style={tw``}>
      <StatusBar style="dark" />
      <ScrollView style={tw``} contentContainerStyle={{ paddingHorizontal: 20 }}>
        <SafeAreaView style={tw``}>
          <SemiBoldText style={tw`text-3xl`}>Practice</SemiBoldText>
        </SafeAreaView>
        <ScrollView
          style={tw`overflow-visible my-2`}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={tw`border rounded-xl py-2 px-4 bg-black mr-3 flex-1`}>
            <LightText style={tw`text-white`}>All</LightText>
          </View>
          <View style={tw`border rounded-xl py-2 px-4 border-gray-300 mr-3 flex-1`}>
            <LightText>Chords</LightText>
          </View>
          <View style={tw`border rounded-xl py-2 px-4 border-gray-300 mr-3 flex-1`}>
            <LightText>Techniques</LightText>
          </View>
          <View style={tw`border rounded-xl py-2 px-4 border-gray-300 mr-3 flex-1`}>
            <LightText>Exercises</LightText>
          </View>
          <View style={tw`border rounded-xl py-2 px-4 border-gray-300 mr-3 flex-1`}>
            <LightText>All</LightText>
          </View>
          <View style={tw`border rounded-xl py-2 px-4 border-gray-300 mr-3 flex-1`}>
            <LightText>All</LightText>
          </View>
        </ScrollView>
        <View style={tw`flex-row flex-wrap`}>
          <View style={tw`flex-1`}>
            <HomeCard text="Hand & Finger Work" height={37} color="green" />
            <HomeCard
              text="Alternate Strumming"
              height={60}
              color="red"
              description="Learn the technique used by famous musicians of all times."
            />
            <HomeCard
              text="Barcarole"
              height={39}
              color="purple"
              description="A traditional folk song sung by Venetian gondoliers."
            />
            <HomeCard
              text="Chord Dictionary"
              height={60}
              color="yellow"
              description="Learn exactly where to place your fingers to play almost any chord."
            />
            <HomeCard
              text="Barcarole"
              height={39}
              color="yellow"
              description="A traditional folk song sung by Venetian gondoliers."
            />
            <HomeCard text="asdsd" height={50} color="yellow" />
            <HomeCard text="asdsd" height={37} color="purple" />
          </View>
          <View style={tw`flex-1`}>
            <HomeCard
              text="Chord Dictionary"
              height={60}
              color="yellow"
              description="Learn exactly where to place your fingers to play almost any chord."
            />
            <HomeCard
              text="Barcarole"
              height={39}
              color="blue"
              description="A traditional folk song sung by Venetian gondoliers."
            />
            <HomeCard text="asdsd" height={80} color="green" />
            <HomeCard text="asdsd" height={40} color="blue" />
          </View>
        </View>
      </ScrollView>
      <SafeAreaView style={tw`items-center`}>
        <BlurView
          style={tw`bg-[#fffff2] bg-opacity-80 rounded-3xl flex-row absolute bottom-20 overflow-hidden shadow-md`}
          intensity={20}
        >
          <SquircleView
            style={tw`h-18 w-18 m-1 items-center justify-center`}
            squircleParams={{
              cornerSmoothing: 0.9,
              cornerRadius: 10,
              fillColor: "transparent",
            }}
          >
            <Ionicons name="home" size={20} />
          </SquircleView>
          <SquircleView
            style={tw`h-18 w-18 m-1 items-center justify-center`}
            squircleParams={{
              cornerSmoothing: 0.9,
              cornerRadius: 20,
              fillColor: base1,
            }}
          >
            <Ionicons name="book" size={20} />
            <Ionicons size={5} name="ellipsis-horizontal-circle-sharp" />
          </SquircleView>
          <SquircleView
            style={tw`h-18 w-18 m-1 items-center justify-center`}
            squircleParams={{
              cornerSmoothing: 0.9,
              cornerRadius: 10,
              fillColor: "transparent",
            }}
          >
            <Ionicons name="musical-note" size={20} />
          </SquircleView>
          <SquircleView
            style={tw`h-18 w-18 m-1 items-center justify-center`}
            squircleParams={{
              cornerSmoothing: 0.9,
              cornerRadius: 10,
              fillColor: "transparent",
            }}
          >
            <Ionicons name="person" size={20} />
          </SquircleView>
        </BlurView>
      </SafeAreaView>
    </View>
  );
};

const base1 = "#FFF0D2";

const MusicGetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={tw.style(`flex-1 bg-[${base1}]`)}>
      <StatusBar style="light" />
      <Video
        source={require("./assets/bg-video-trimmeded-1080.mov")}
        style={tw`absolute top-0 bottom-0 left-0 right-0`}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        resizeMode="cover"
        volume={0}
      />
      <SafeAreaView style={tw`flex-1 justify-end`}>
        <SquircleView
          style={tw.style(`p-7 py-12 m-8 mb-3 items-center overflow-hidden`)}
          squircleParams={{
            cornerSmoothing: 0.9,
            cornerRadius: 60,
            fillColor: "#FFFFFFEF",
          }}
        >
          <SemiBoldText style={tw`text-4xl text-center font-medium my-2`}>
            Explore world of music
          </SemiBoldText>
          <LightText style={tw`my-2 text-base`}>Learn and practice music skills</LightText>
          <Pressable
            style={tw`p-2 mt-6 rounded-xl items-center justify-center bg-[${base1}]`}
            onPress={() => navigation.navigate("MusicHome")}
          >
            <MediumText style={tw`text-base font-medium px-6 text-center py-1`}>
              Get started <Ionicons name="chevron-forward" size={19} />
            </MediumText>
          </Pressable>
        </SquircleView>
      </SafeAreaView>
    </View>
  );
};

export default Music;
