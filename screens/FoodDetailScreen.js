import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";
import { AntDesign } from "@expo/vector-icons";
import { FavoritesContext } from "../components/store/favoritecontext";

export default function FoodDetailScreen({ route, navigation }) {
  const favoriteFoodContext = useContext(FavoritesContext);
  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);

  const foodIsFavorite = favoriteFoodContext.ids.includes(foodId);

  const presshandler = () => {};

  function changeFavorite() {
    if (foodIsFavorite) {
      favoriteFoodContext.removeFavorite(foodId);
    } else {
      favoriteFoodContext.addFavorite(foodId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={presshandler}
            style={({ pressed }) => (pressed ? styles.pressed : null)}
          >
            <AntDesign
              name={foodIsFavorite ? "star" : "staro"}
              size={24}
              color="black"
              onPress={changeFavorite}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, changeFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>İçindekiler</Text>
          {/* <Text style={styles.detailItem}>{selectedFood.ingredients}</Text> */}
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50,
  },
  image: {
    width: "%100",
    height: 300,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
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
  listContainer: {
    paddingHorizontal: 10,
  },
  subTitleContainer: {
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#2B96FF",
    marginVertical: 5,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2B96FF",
  },
});
