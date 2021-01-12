// Import: Dependencies
import { StyleSheet, Dimensions } from "react-native";

// Styles
export const styles = StyleSheet.create({
  // Style: container
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },

  // Style: image
  image: {
    height: "100%",
    position: "absolute",
    width: "100%",
    resizeMode: "cover",
  },

  // Style: titles
  titles: {
    alignItems: "center",
    marginTop: "35%",
    width: "100%",
  },

  // Style: headline
  headline: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "600",
  },

  // Style: subtitle
  subtitle: {
    color: "#f1f1f1",
    fontSize: 16,
  },

  // Style: subtitleCTA
  subtitleCTA: {
    textDecorationLine: "underline",
  },

  // buttonContainer
  buttonContainer: {
    bottom: 50,
    position: "absolute",
    width: "100%",
  },
});
