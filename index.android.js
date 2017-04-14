/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Navigator,
} from 'react-native';

import TrendingSection from './src/Sections/TrendingSection.js';
import NewsSection from './src/Sections/NewsSection.js';
import MapSection from './src/Sections/MapSection.js';
import PropertyDetailSection from './src/Sections/PropertyDetailSection.js';
import _ from 'underscore';

var ROUTES = {
  trendingSection: TrendingSection,
  newsSection: NewsSection,
  mapSection: MapSection,
  propertyDetailSection: PropertyDetailSection,
}

export default class ViviendaPro extends Component {

  constructor(props) {
    super(props);
  }

  //FUNCIONES
  //functions inside Component can't have function string
  renderScene(route, navigator) {
    var Component = ROUTES[route.name]
    return <Component route={route} navigator={navigator} />
  }

  render() {
    console.log("News", this.news);
    return (

      <View style={styles.container}>

        <Navigator
          style={styles.wrapper}
          initialRoute={{ name: 'mapSection' }}
          renderScene={this.renderScene}
        />

      </View>
    );
  }
}

//CONSTANTES
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('ViviendaPro', () => ViviendaPro);