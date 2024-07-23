import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodOverviewScreen from "./screens/FoodOverviewScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import FavoritesContextProvider from "./components/store/favoritecontext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#CCF6FF" } }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Tüm Kategoriler",
          drawerIcon: () => <Feather name="list" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favoriler",
          drawerIcon: () => <AntDesign name="star" size={24} color="black" />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "lightblue" },
            headerTintColor: "black",
            contentStyle: { backgroundColor: "#CCF6FF" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
          <Stack.Screen
            name="FoodDetail"
            component={FoodDetailScreen}
            options={{ title: "İçerik" }}
          />
        </Stack.Navigator>
      </FavoritesContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
