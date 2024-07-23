import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FoodItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();

  const FoodItemHandler = () => {
    navigation.navigate("FoodDetail", {
      foodId: id,
    });
  };

  return (
    <View style={styles.foodItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={FoodItemHandler}
      >
        <View style={styles.innerView}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  foodItem: {
    margin: 15,
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
  },
  image: {
    width: "%100",
    height: 200,
    borderRadius: 5,
  },
  innerView: {},
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  detailItem: {
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
