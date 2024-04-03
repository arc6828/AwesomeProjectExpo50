import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import PokemonTab from "./PokemonTab";
import YourHealth from "../screens/week9/YourHealth";
import TodoList from "../screens/week9/TodoList";
import Location from "../screens/week10/Location";
import LocationQuiz from "../screens/week10/LocationQuiz";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  />

      <Stack.Screen name="YourHealth" component={YourHealth} />
      <Stack.Screen name="TodoList" component={TodoList} />

      
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="LocationQuiz" component={LocationQuiz} />



    </Stack.Navigator>
  );
}
