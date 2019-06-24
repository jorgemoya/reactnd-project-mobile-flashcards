import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/";
import middleware from "./middleware";
import Tabs from "./components/Tabs";
import { StatusBar, View, Text } from "react-native";
import Constants from "expo-constants";

const store = createStore(reducer, middleware);

function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <View style={{ height: Constants.statusBarHeight }}>
          <StatusBar barStyle="dark-content" />
        </View>
        <Tabs />
      </View>
    </Provider>
  );
}

export default App;
