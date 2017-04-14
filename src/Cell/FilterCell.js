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
    marginHorizontal: 6,
    marginVertical: 10,
    backgroundColor: 'green',
    borderRadius: 6,
    height: 120,
    width: 110,
  },
  title: {
    fontSize: 30,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  img: {
    height: 50,
    margin: 10,
    backgroundColor: 'orange'
  },
})

export default class FilterCell extends Component {
  render() {
    const title = this.props.title;
    const img = this.props.img;
    const active = this.props.active;

    console.log("Active ", this.props.active);
    if(this.props.active === true){
      console.log("Entro en Active ");
      this.backgroundColor = 'green'
    }else{
      this.backgroundColor = 'grey'
    }
    return (
      <View style={[styles.container, {backgroundColor: this.backgroundColor}]}>
        <Image style={styles.img} source={img}/>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}