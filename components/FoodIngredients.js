import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodIngredients({ data }) {
  return data.map((dataIng) => (
    <View key={dataIng} style={styles.listItem}>
      <Text style={styles.itemText}>{dataIng}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#2B96FF",
    borderRadius: 10,
    margin: 3,
    paddingVertical: 4,
  },
  itemText: {
    textAlign: "center",
  },
});
