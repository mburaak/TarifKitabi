import { StyleSheet, View, Text } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../components/store/favoritecontext";
import { FOODS } from "../data/dummy-data";
import FoodList from "../components/FoodList";

export default function FavoritesScreen() {
  const favoriteFoodContext = useContext(FavoritesContext);

  const favoriteFood = FOODS.filter((food) =>
    favoriteFoodContext.ids.includes(food.id)
  );

  if (favoriteFood.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Favorilere herhangi birşey eklenmedi.</Text>
      </View>
    );
  }

  return <FoodList items={favoriteFood} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
