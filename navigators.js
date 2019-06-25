import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";
import Decks from "./components/Decks";

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator({
        Decks: {
          screen: Decks,
          navigationOptions: {
            tabBarIcon: () => (
              <FontAwesome name="folder" size={20} color="black" />
            )
          }
        },
        AddDeck: {
          screen: AddDeck,
          navigationOptions: {
            tabBarIcon: () => (
              <FontAwesome name="plus" size={20} color="black" />
            )
          }
        }
      })
    : createMaterialBottomTabNavigator({
        Decks: {
          screen: Decks,
          navigationOptions: {
            tabBarIcon: () => (
              <FontAwesome name="folder" size={20} color="white" />
            )
          }
        },
        AddDeck: {
          screen: AddDeck,
          navigationOptions: {
            tabBarIcon: () => (
              <FontAwesome name="plus" size={20} color="white" />
            )
          }
        }
      });

export const Stack = createAppContainer(
  createStackNavigator(
    {
      Decks: {
        screen: Tabs,
        navigationOptions: () => ({
          header: null
        })
      },
      Deck: {
        screen: Deck,
        navigationOptions: () => ({
          title: `Deck`
        })
      }
    },
    {
      initialRouteName: "Decks"
    }
  )
);
