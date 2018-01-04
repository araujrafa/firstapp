/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ( { navigation } ) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Minha Home</Text>
    <Button 
      onPress={() => navigation.navigate('Details')}
      title="Vai para Detalhes"
    />
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Tela de detalhes</Text>
  </View>
);

const RooterNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    }
  }, 
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    }
  }
});

export default RooterNavigator;
