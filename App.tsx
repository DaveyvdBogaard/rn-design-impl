import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BankyDesign from "./designs/1/BankyDesign";
import Health from "./designs/2/Health";
import Music from "./designs/3/Music";
import Events from "./designs/4/Events";

export default function App() {
  return <Events />;
  return <Music />;
  return <Health />;
  return <BankyDesign />;
}
