import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  label: {
    marginTop: 32,
    backgroundColor: 'red',
    fontSize: 18,
    height: 48,
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
        <Text style={styles.label}>{title}</Text>
      </View>
    );
  }
}