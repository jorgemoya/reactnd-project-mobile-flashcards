import React from "react";
import { Provider } from "react-redux";
import { Stack } from "./navigators";
import { StatusBar, View } from "react-native";
import Constants from "expo-constants";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./configureStore";
import { setLocalNotification } from "./utils/helpers";

const { persistor, store } = configureStore();

class App extends React.PureComponent {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <View style={{ height: Constants.statusBarHeight }}>
              <StatusBar barStyle="dark-content" />
            </View>
            <Stack />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
