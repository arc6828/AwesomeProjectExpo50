import React from "react";

import Welcome from "./screens/Welcome";
import Ex01 from "./screens/week2/Ex01";
import Ex02 from "./screens/week2/Ex02";
import { Alert, Button, Image, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Greeting from "./components/Greeting";
import Travel from "./screens/week3/Travel";
import { PaperProvider } from "react-native-paper";
import TestPaper from "./screens/week4/TestPaper";
import Health from "./screens/week5/Health";
import ChartKitScreen from "./screens/week5/ChartKitScreen";
import Home from "./screens/week6/Home";
import FlatListExample from "./screens/week6/FlatListExample";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./navigations/HomeStack";
import BottomTab from "./navigations/BottomTab";
import RootStack from "./navigations/RootStack";
import { AuthContextProvider } from "./hooks/AuthContextProvider";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        {/* <HomeStack /> */}
        {/* <BottomTab /> */}
        <RootStack />
      </NavigationContainer>
    </AuthContextProvider>


    // <Travel />
    // <Welcome />
    // <Ex02 />
    // <PaperProvider>
    //   <TestPaper />
    // </PaperProvider>

    // <Health />
    // <ChartKitScreen />
    // <Home />
    // <FlatListExample />

    // <View style={{ flex: 1, marginTop: 25 }}>
    //   <TextInput
    //     keyboardType="email-address"
    //     autoCapitalize="none"
    //     autoCorrect={false}
    //     maxLength={30}
    //     multiline={false}
    //     placeholder="Please enter your email"
    //     returnKeyType="next"
    //     onChangeText={(text) => {}}
    //     defaultValue="Default text"
    //   />

    //   <Button
    //     title="Press me"
    //     onPress={() => Alert.alert("Simple Button pressed")}
    //     color="#665544"
    //   />

    //   <Text> Hello World </Text>

    //   <Image
    //     source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //     style={{ width: 50, height: 50 }}
    //   />

    //   <View style={{ flex: 1, flexDirection: "column" }}>
    //     {/* Fixed Size */}
    //     <View
    //       style={{
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         marginTop: 50,
    //       }}
    //     >
    //       <Image
    //         style={{ width: 150, height: 100 }}
    //         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       />
    //       <Image
    //         style={{ width: 150, height: 150 }}
    //         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       />
    //       <Image
    //         style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
    //         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    //       />
    //     </View>
    //   </View>

    //   <Greeting name="Valeera" lastname="zzz" />
    //   <FontAwesome name="circle" size={32} color="orange" />

    //   <Greeting name="Rexxar" lastname="XXXX" />
    //   <Greeting name="Jaina" lastname="yyy" />
    // </View>
  );
}
