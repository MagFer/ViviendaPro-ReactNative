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

export default class MapSection extends Component {
  state = {
    houses: [],
    region: new MapView.AnimatedRegion({
      latitude: 41.4092,
      longitude: 2.1304,
      latitudeDelta: 3.1922,
      longitudeDelta: 3.1421,
    }),
    loading: true
  }

  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    const uri = 'http://91.134.139.134:3006/api/properties/type/sale';
    try {
      const response = await fetch(uri);
      const jsonData = await response.json();
      console.log(jsonData);
      this.setState({ houses: jsonData, loading: false })
      console.log('Houses to Sell', this.state.housesToSellContent);
    } catch (e) {
      console.log(e);
      this.setState({ loading: false })
    }

    //this.centerOnUser();
  }

  centerOnUser() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        })
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    console.log("News", this.news);
    const navigator = this.props.navigator;

    if (this.state.houses[0]){
      console.log('Latitude:', Number(this.state.houses[0].location.latitude), 'Longitude: ', Number(this.state.houses[0].location.longitude));
    }

    return (
      <View style={styles.container}>
        <Header title={"Map"} />
        <MapView.Animated style={styles.map} region={this.state.region}>
          {this.state.houses.map(house => (
            <MapView.Marker
              key={house._id}
              coordinate={{ latitude: Number(house.location.latitude), longitude: Number(house .location.longitude) }}
              title={house.name}
              description={'Station ID: ' + house.description}
            />

          ))
          }
        </MapView.Animated>
        <Tabbar navigator={navigator} page={2}/>
        { this.state.loading && <ActivityIndicator style={styles.loading} color="black"/> }
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
