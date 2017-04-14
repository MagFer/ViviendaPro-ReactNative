import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';


export default class NewCell extends Component {
  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }



  render() {
    const title = this.props.house.name;
    const description = this.props.house.description;
    const zipcode = this.props.house.zipcode;
    const images = this.props.house.images;
    const {flexDirection, alignItems, justifyContent} = this.state

    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Image style={styles.image} source={{ uri: images[0] }} />
        </View>
        <View style={styles.rightView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{description}</Text>
          <Text style={styles.subtitle}>{zipcode}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 15,
    height: 100,
  },
  leftView: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  rightView: {
    flex: 1,
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height:100,
    borderRadius: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    marginHorizontal: 10,
    //textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'green',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 12,
    marginHorizontal: 10,
    //textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'green',
  },
})