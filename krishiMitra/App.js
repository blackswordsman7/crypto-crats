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
  TouchableOpacity
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         	Welcome to Krishi Mitra
        </Text>
        <Text style={styles.text_m}>
         	a Decentralized Eco-System for Agriculture
        </Text>
        <View>
          <TouchableOpacity>
            <Text>Farmer </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Investor </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Merchant </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(217deg, rgba(0,255,0,.8), rgba(255,0,0,0) 70.71%)'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text_m: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
