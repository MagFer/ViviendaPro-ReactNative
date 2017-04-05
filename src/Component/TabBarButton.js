import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 50,
  },
})

export default class TabBarButton extends Component {

  render() {
    const image = require('../assets/button.png');
    const title = this.props.title;
    const navigator = this.props.navigator;
    const sectionKey = this.props.sectionKey;

    console.log('Props Button', this.props)
    return (
      <TouchableHighlight onPress={() => {
          navigator.replace({name : sectionKey})
      }


      }>
        <View style={styles.container}>
          <Image source={image} />
          <Text>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}