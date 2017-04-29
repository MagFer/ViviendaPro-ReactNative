import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: '#4A4A4A',
    height: 60,
    width: Dimensions.get('window').width,
  },
  label: {
    marginTop:24,
    fontSize: 24,
    color: 'white',
    width: Dimensions.get('window').width,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})

export default class Header extends Component {
  render() {
    const title = this.props.title;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Text style={styles.label}>{title}</Text>
      </View>
    );
  }
}