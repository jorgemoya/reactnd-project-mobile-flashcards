import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AddDeck from "./AddDeck";
import Decks from "./Decks";

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator({
        Decks: {
          screen: Decks,
          navigationOptions: {
            tabBarIcon: () => (
              <FontAwesome name="folder" size={30} color="black" />
            )
          }
        },
        AddDeck: {
          screen: AddDeck,
          navigationOptions: {
            tabBarIcon: () => (
              <FontAwesome name="plus" size={30} color="black" />
            )
          }
        }
      })
    : createMaterialBottomTabNavigator({
        Decks: {
          screen: Decks,
          navigationOptions: {
            tabBarIcon: () => (
              <FontAwesome name="folder" size={30} color="white" />
            )
          }
        },
        AddDeck: {
          screen: AddDeck,
          navigationOptions: {
            tabBarIcon: () => (
              <FontAwesome name="plus" size={30} color="white" />
            )
          }
        }
      });

export default createAppContainer(Tabs);
