// Import: Dependencies
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

// Import: Components
import { GalaxyList, Header } from "./components";

// Component: App
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" style="light" />
      <Header />

      <GalaxyList />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});
