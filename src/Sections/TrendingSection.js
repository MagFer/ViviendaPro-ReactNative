import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  Dimensions
} from 'react-native';

import Header from '../Component/Header';
import Tabbar from '../Component/TabBar';
import NewCell from '../Cell/NewCell';
import FilterCell from '../Cell/FilterCell';
import _ from 'underscore';

export default class TrendingSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      housesToSellContent : [],
      housesToRentContent :[],
      loading: true,
    }
  }

  async componentWillMount() {
    const uri = 'http://91.134.139.134:3006/api/properties/type/sale';
    try {
      const response = await fetch(uri);
      const jsonData = await response.json();
      console.log(jsonData);
      this.setState({ housesToSellContent: jsonData, loading: false , })
      console.log('Houses to Sell',this.state.housesToSellContent);
    } catch (e) {
      console.log(e);
      this.setState({loading: false})
    }
  }

  render() {
    const navigator = this.props.navigator;

    console.log("News", this.news);

    return (
      <View style={styles.container}>
        <Header title={"Trending"} />
        <ScrollView style={styles.content}>
          <Text>Soy una bici muy sexy 🚲🍑</Text>
          <Text>Soy una bici muy sexy 🚲🍑</Text>
          <Text>Soy una bici muy sexy 🚲🍑</Text>
          <Text>Soy una bici muy sexy 🚲🍑</Text>
          { this.state.loading && <ActivityIndicator style={styles.loading}/> }

        </ScrollView>
        <Tabbar navigator={navigator} />
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollViewFilters: {
    backgroundColor: 'yellow',
    height: 160,
  },
  loading: {
    position: 'absolute',
    top: Dimensions.get('window').height/2,
    right: Dimensions.get('window').width/2
  }

});
