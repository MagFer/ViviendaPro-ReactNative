import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import Header from '../Component/Header';
import Tabbar from '../Component/TabBar';
import NewCell from '../Cell/NewCell';
import FilterCell from '../Cell/FilterCell';
import MapView from 'react-native-maps'
import _ from 'underscore';

export default class PropertyDetailSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Entro en render");

    return (
      <View style={styles.container}>
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'orange',
  },
  map: {
    flex: 3,
    backgroundColor: 'green',
  },
  loading: {
    position: 'absolute',
    top: Dimensions.get('window').height/2,
    right: Dimensions.get('window').width/2
  }
});
