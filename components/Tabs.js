import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import AddDeck from "./AddDeck";

const Tabs = createBottomTabNavigator({
  // Decks: {
  //   screen: Decks,
  //   navigationOptions: {
  //     tabBarIcon: () => <FontAwesome name="drive" size={30} color="black" />
  //   }
  // },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name="plus" size={30} color="black" />
    }
  }
});

export default createAppContainer(Tabs);
