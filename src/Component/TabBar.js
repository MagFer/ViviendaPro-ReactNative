import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './TabBarButton';
import _ from 'underscore';

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: '#4A4A4A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
})

export default class Footer extends Component {

  constructor(props){
    super(props);
    const pageSelected = this.props.page;
    
    this.tabBarButtonsContent = [
        {id: 1, title: 'Properties', sectionKey: 'propertiesSection', image: require('../assets/tabBar/properties/Unselected.png'), textColor: '#9B9B9B'},
        {id: 2, title: 'Map', sectionKey: 'mapSection', image: require('../assets/tabBar/map/Unselected.png'), textColor: '#9B9B9B'},
        {id: 3, title: 'Profile', sectionKey: 'profileSection', image: require('../assets/tabBar/profile/Unselected.png'), textColor: '#9B9B9B'}    
    ];

    this.tabBarButtonsContent[pageSelected-1].textColor = '#B8E986';
    
    switch (pageSelected) {
      case 1:
        this.tabBarButtonsContent[pageSelected-1].image = require('../assets/tabBar/properties/Selected.png');
        break;
      case 2:
        this.tabBarButtonsContent[pageSelected-1].image = require('../assets/tabBar/map/Selected.png');
        break;
      case 3:
        this.tabBarButtonsContent[pageSelected-1].image = require('../assets/tabBar/profile/Selected.png');
        break;
      default:
        break;
    }
  }

  render() {
    const navigator = this.props.navigator;
    return (
      <View style={styles.container}>
        {
        _.map(this.tabBarButtonsContent, (buttonContent) => {
          return (
            <Button key={buttonContent.id} 
                    title={buttonContent.title} 
                    image={buttonContent.image}
                    navigator={navigator}
                    sectionKey={buttonContent.sectionKey}
                    textColor={buttonContent.textColor}/>
          )
        })
        }
      </View>
    );
  }
}