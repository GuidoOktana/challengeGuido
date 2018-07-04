import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStackNavigator } from 'react-navigation';

import reducers from './src/reducers';

import HomeScreen from './src/screens/HomeScreen';
import RiskSelectorScreen from './src/screens/RiskSelectorScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';

const store = createStore(
  reducers,
  {},
);

const MainNavigator = createStackNavigator({
  home: { screen: HomeScreen },
  risk: { screen: RiskSelectorScreen },
  portfolio: { screen: PortfolioScreen },
});

export default class App extends Component {

   render() {
    return (
      <Provider store={store}>
         <View style={styles.container} >
            <MainNavigator />
         </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
