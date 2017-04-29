import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  ListView,
  TouchableHighlight,
  AsyncStorage,
  StatusBar,
} from 'react-native';

import Header from '../Component/Header';
import Tabbar from '../Component/TabBar';
import NewCell from '../Cell/NewCell';
import PropertyCell from '../Cell/PropertyCell';
import FilterCell from '../Cell/FilterCell';
import _ from 'underscore';

var STORAGE_KEY_FAVORITE_HOUSES = 'Houses:favs';

export default class PropertiesSection extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !==
        r2
    });

    this.state = {
      favorites: [],
      loading: true,
      housesDataSource: ds.cloneWithRows([]),
    }

    this.filterContent = [
      { id: 0, title: "All properties", image: require("../assets/properties/saleAndRental/saleAndRental.png"), categoryId: 0, active: true },
      { id: 1, title: "Properties for sale", image: require("../assets/properties/sale/sale.png"), categoryId: 1, active: false },
      { id: 2, title: "Properties for rental", image: require("../assets/properties/rental/rental.png"), categoryId: 2, active: false },
    ];

    this.filters = [];
    for (var filterNumber = 0; filterNumber < this.filterContent.length; filterNumber++) {
      this.filters.push(<FilterCell key={this.filterContent[filterNumber].id}
        width={50}
        title={this.filterContent[filterNumber].title}
        img={this.filterContent[filterNumber].image} />);
    }


  }

  removeItem(index) {
    this.setState({
      favourites: this.state.favourites.filter((_, i) => i !== index)
    });
  }

  async componentWillMount() {
    this.loadSaleHouses(0);
  }

  componentDidMount() {
    this._loadInitialState();
  }

  _loadInitialState = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY_FAVORITE_HOUSES);
      this.setState({ favorites: JSON.parse(value) });
      console.log('Saved selection to disk: ' + value);
    } catch (error) {
      console.log('AsyncStorage error: ' + error);
    }
  };



  async loadSaleHouses(categoryId) {

    var uri = 'http://91.134.139.134:3006/api/properties/type/all';

    switch (categoryId) {
      case 1:
        uri = 'http://91.134.139.134:3006/api/properties/type/sale';
        break;
      case 2:
        uri = 'http://91.134.139.134:3006/api/properties/type/rental';
        break;
      default:
        break;
    }
    this.setState({ loading: true })
    try {
      const response = await fetch(uri);
      const jsonData = await response.json();
      //AsyncStorage.setItem(STORAGE_KEY_FAVORITE_HOUSES, String(jsonData));
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !==
          r2
      });
      this.setState({ houses: jsonData })
      this.setState({ housesDataSource: ds.cloneWithRows(jsonData), loading: false })
    } catch (e) {
      console.log(e);
      this.setState({ loading: false })
    }


    // var arrayOfFavorites = []
    // _.map(this.state.houses, (function addFavourite(house) {
    //   arrayOfFavorites.push(house._id);
    // }))
    // console.log("All favourites: " + arrayOfFavorites);
    // var index = arrayOfFavourites.indexOf('i3wif4X4MJT9vcaZ3')
    // arrayOfFavorites.splice(index, 1);
    // console.log("Favourites without i3wif4X4MJT9vcaZ3: " + arrayOfFavourites);

    // var index2 = arrayOfFavorites.indexOf('i3X4MJT9vcaZ32')
    // console.log("Index2: " + index2);


  }


  render() {
    const navigator = this.props.navigator;

    return (
      <View style={styles.container}>
        <Header title={"Properties"} />

        <View style={styles.viewWrapScrollView}>
          <ScrollView horizontal style={styles.scrollViewFilters}
          >
            {
              _.map(this.filterContent, (function showFilterElement(filterContentItem) {
                return (
                  <TouchableHighlight key={filterContentItem.id} onPress={
                    (() => {
                      this.filterContent[0].active = false;
                      this.filterContent[1].active = false;
                      this.filterContent[2].active = false;
                      this.filterContent[filterContentItem.id].active = true;
                      this.loadSaleHouses(filterContentItem.categoryId);
                      //navigator.push({name: 'propertyDetailSection'});
                    }).bind(this)
                  }>
                    <View>
                      <FilterCell key={filterContentItem.id}
                        active={filterContentItem.active}
                        title={filterContentItem.title}
                        img={filterContentItem.image} />
                    </View>
                  </TouchableHighlight>
                )
              }).bind(this))
            }
          </ScrollView>
        </View>

        <ListView
          style={styles.listContainer}
          dataSource={this.state.housesDataSource} enableEmptySections
          renderSeparator={this._renderSeperator}
          renderRow={this._renderRow.bind(this)/*(house) =>
            <PropertyCell key={house._id} house={house} /> 
          */}
        />

        <Tabbar navigator={navigator} page={1} />
        {this.state.loading && <ActivityIndicator style={styles.loading} color="black" />}
      </View>
    );
  }

  _renderRow(rowData, sectionID, rowID, navigator) {
    //console.log('render row ...', rowData);
    var favorite = false;

    return (
      <TouchableHighlight onPress={
        (() => {
          var arrayOfFavorites = this.state.favorites;
          var index = arrayOfFavorites.indexOf(rowData._id)
          if (index >= 0) { //if exist this favourite (index = -1) y delete the item
            arrayOfFavorites.splice(index, 1);
          } else {
            arrayOfFavorites.push(rowData._id);
            favorite = true;
          }
          this.setState({ favorites: arrayOfFavorites });
          console.log("Favorites state:" + this.state.favorites)
          AsyncStorage.setItem(STORAGE_KEY_FAVORITE_HOUSES, JSON.stringify(arrayOfFavorites));
        })
      }>
        <View>
          {/*console.log("Fav "+ rowData._id + "val: " + this.state.favorites.indexOf(rowData._id))*/}
          {(this.state.favorites.indexOf(rowData._id) >= 0) && <PropertyCell key={rowData._id} house={rowData} favorite={true} />}
          {(this.state.favorites.indexOf(rowData._id) < 0) && <PropertyCell key={rowData._id} house={rowData} favorite={false} />}
        </View>
      </TouchableHighlight>
    );
  }

  _onPressRow() {
    console.log('presed Row');
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapScrollView: {
    height: 120,
  },
  scrollViewFilters: {
    backgroundColor: '#aaac',
    height: 100,
    flex: 1,
  },
  listContainer: {

  },
  loading: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2,
    right: Dimensions.get('window').width / 2,
  },
  style_row_view: {
    flex: 1,
    flexDirection: 'row',
    height: 57,
    backgroundColor: '#FFFFFF',
  },
  style_text: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#333333',
    alignSelf: 'center',
  },
});
