import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: 'green'
  },
  title: {
    fontSize: 30,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  description: {
    marginTop: 10,
    backgroundColor: 'orange',
    fontSize: 18,
    marginTop: 10,
    marginHorizontal: 10,
    //textAlign: 'center',
    textAlignVertical: 'center',
  },
})

export default class NewCell extends Component {
  render() {
    const title = this.props.title;
    const description = this.props.description;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}