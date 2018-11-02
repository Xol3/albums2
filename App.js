/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
  // Header - CardSection - Card - CardSection - Button
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header   />
        <Text style={styles.welcome}>Pancho!</Text>
        <Text style={styles.instructions}>Ohh yeah !</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(100,0,0)',
  },
  welcome: {
    fontSize: 28,
    color: 'rgb(200,200,200)',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'rgb(255,255,0)',
    marginBottom: 5,
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    color: 'rgb(255,255,0)',
    marginBottom: 5,
  },
});
