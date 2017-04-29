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

import PropertiesSection from './src/Sections/PropertiesSection.js';
import NewsSection from './src/Sections/NewsSection.js';
import MapSection from './src/Sections/MapSection.js';
import PropertyDetailSection from './src/Sections/PropertyDetailSection.js';
import ProfileSection from './src/Sections/ProfileSection.js';
import _ from 'underscore';

var ROUTES = {
  propertiesSection: PropertiesSection,
  newsSection: NewsSection,
  mapSection: MapSection,
  propertyDetailSection: PropertyDetailSection,
  profileSection: ProfileSection,
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
          initialRoute={{ name: 'propertiesSection' }}
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