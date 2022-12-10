import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import BankyDesign from "./designs/1/BankyDesign";
import Health from "./designs/2/Health";
import Music from "./designs/3/Music";
import Events from "./designs/4/Events";
import Travel from "./designs/5/Travel";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button title="Travel" onPress={() => navigation.navigate("Travel")} />
      <Button title="Events" onPress={() => navigation.navigate("Events")} />
      <Button title="Music" onPress={() => navigation.navigate("Music")} />
      <Button title="Health" onPress={() => navigation.navigate("Health")} />
      <Button title="BankyDesign" onPress={() => navigation.navigate("BankyDesign")} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Press button to view design" }}
        />
        <Stack.Screen name="Travel" component={Travel} options={{ headerShown: false }} />
        <Stack.Screen name="Events" component={Events} options={{ headerShown: false }} />
        <Stack.Screen name="Music" component={Music} options={{ headerShown: false }} />
        <Stack.Screen name="Health" component={Health} options={{ headerShown: false }} />
        <Stack.Screen name="BankyDesign" component={BankyDesign} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
