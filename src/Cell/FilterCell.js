import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: 'green',
    borderRadius: 6,
  },
  title: {
    fontSize: 30,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  img: {
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: 'orange'
  },
})

export default class FilterCell extends Component {
  render() {
    const title = this.props.title;
    const img = this.props.img;
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={img}/>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}