import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';

import _ from 'underscore';


export default class PropertyCell extends Component {
  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }



  render() {
    const id = this.props.house._id;
    const title = this.props.house.name;
    const description = this.props.house.description;
    const zipcode = this.props.house.zipcode;
    const type = this.props.house.type;
    const images = this.props.house.images;
    var favorite = this.props.favorite;
    const { flexDirection, alignItems, justifyContent } = this.state

    var imgSource = require("../assets/properties/sale/sale.png");
    if (type == 'rental') {
      imgSource = require("../assets/properties/rental/rental.png");
    }

    // var index = favorites.indexOf(id);
    // if ( index >= 0){
    //console.log("Fav cell val:" + favorite);
    var imgFavoriteSource = require("../assets/heart/unselected.png");
    if (favorite == true) {
      //this.backgroundColor = 'red'
      imgFavoriteSource = require("../assets/heart/selected.png");
    } else {
      //this.backgroundColor = 'grey'
    }

    return (
      
      <View style={[styles.container, { backgroundColor: this.backgroundColor }]}>
        <View style={styles.leftView}>
          <Image style={styles.image} source={{ uri: images[0] }} />
        </View>
        <View style={styles.rightView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{description}</Text>
          <Text style={styles.subtitle}>{zipcode}</Text>
        </View>
        <Image style={styles.imageFavorite} source={imgFavoriteSource} />
        <Image style={styles.imageTypeOfHouse} source={imgSource} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    height: 100,
    alignItems: 'center',
    borderWidth: 0.5,
    borderTopColor: '#bbb0',
    borderLeftColor: '#bbb0',
    borderRightColor: '#bbb0',
    borderBottomColor: '#bbb',
  },
  leftView: {
    width: 100,
    height: 100,
    //backgroundColor: 'red',
  },
  rightView: {
    flex: 1,
    height: 100,
    //backgroundColor: 'orange',
  },
  title: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    margin: 4,
  },
  imageTypeOfHouse: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 5,
  },
  imageFavorite: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    marginLeft: 10,
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
    //backgroundColor: 'green',
  },
})