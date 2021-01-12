// Import: Dependencies
import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import data from "./galaxyListData";

// Import: Styles
import { styles } from "./GalaxyList.styles";

// Import: Components
import GalaxyItem from "../GalaxyItem/GalaxyItem.component";

// Component: GalaxyList
export default function GalaxyList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GalaxyItem galaxy={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
