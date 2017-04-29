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
    flexDirection: 'column',
    borderRadius: 6,
    height: 100,
    width: 110,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    //backgroundColor: 'grey',
    marginTop: 4,
    marginHorizontal: 10,
  },
  img: {
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    width: 90,
    resizeMode: 'contain',
    //backgroundColor: 'orange'
  },
})

export default class FilterCell extends Component {
  render() {
    const title = this.props.title;
    const img = this.props.img;
    const active = this.props.active;
    if(this.props.active === true){
      this.backgroundColor = '#B8E986'
    }else{
      this.backgroundColor = '#EBEBEB'
    }
    return (
      <View style={[styles.container, {backgroundColor: this.backgroundColor}]}>
        <Image style={styles.img} source={img}/>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}