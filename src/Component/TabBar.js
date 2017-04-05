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
    height: 100,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
})

export default class Footer extends Component {

  constructor(props){
    super(props);
    this.tabBarButtonsContent = [
        {id: 1, title: 'Trending', sectionKey: 'trendingSection'},
        {id: 2, title: 'News', sectionKey: 'newsSection'},
        {id: 3, title: 'Map', sectionKey: 'mapSection'}
    ];
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
                    navigator={navigator}
                    sectionKey={buttonContent.sectionKey}/>
          )
        })
        }
      </View>
    );
  }
}