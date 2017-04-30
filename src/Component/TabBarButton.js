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
    width: 80,
    alignItems:'center',
  },
})

export default class TabBarButton extends Component {

  render() {
    const image = this.props.image;
    const title = this.props.title;
    const navigator = this.props.navigator;
    const sectionKey = this.props.sectionKey;
    const textColor = this.props.textColor;

    return (
      <TouchableHighlight onPress={() => {
          navigator.replace({name : sectionKey})
      }


      }>
        <View style={styles.container}>
          <Image source={image} />
          <Text style={[,{color:  this.props.textColor}]}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}