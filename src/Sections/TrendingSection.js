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
} from 'react-native';

import Header from '../Component/Header';
import Tabbar from '../Component/TabBar';
import NewCell from '../Cell/NewCell';
import PropertyCell from '../Cell/PropertyCell';
import FilterCell from '../Cell/FilterCell';
import _ from 'underscore';

export default class TrendingSection extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !==
        r2
    });

    this.state = {
      houses: [],
      loading: true,
      housesDataSource: ds.cloneWithRows([]),
    }

    this.filterContent = [
      { id: 0, title: "All ", image: require("../assets/properties/saleAndRental/saleAndRental.png"), categoryId: 0, active: true },
      { id: 1, title: "Sale", image: require("../assets/properties/sale/sale.png"), categoryId: 1, active: false },
      { id: 2, title: "Rental", image: require("../assets/properties/rental/rental.png"), categoryId: 2, active: false },
    ];

    this.filters = [];
    for (var filterNumber = 0; filterNumber < this.filterContent.length; filterNumber++) {
      this.filters.push(<FilterCell key={this.filterContent[filterNumber].id}
        width={50}
        title={this.filterContent[filterNumber].title}
        img={this.filterContent[filterNumber].image} />);
    }


  }

  filterNewsContent(categoryId) {
    console.log("filterNewsContent Called");
    if (categoryId == 0) {
      this.setState({ newsContentFiltered: this.newsContent });
    } else {
      this.setState({
        newsContentFiltered:
        _.filter(this.newsContent, function (newsContentItem) {
          return newsContentItem.categoryId === categoryId;
        })
      });
    }

  }

  async componentWillMount() {
    const uri = 'http://91.134.139.134:3006/api/properties/type/all';
    try {
      const response = await fetch(uri);
      const jsonData = await response.json();
      console.log(jsonData);
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !==
          r2
      });
      this.setState({ housesDataSource: ds.cloneWithRows(jsonData), loading: false })
      console.log('Houses to Sell', this.state.houses);
    } catch (e) {
      console.log(e);
      this.setState({ loading: false })
    }
  }

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
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !==
          r2
      });
      this.setState({ housesDataSource: ds.cloneWithRows(jsonData), loading: false })
    } catch (e) {
      console.log(e);
      this.setState({ loading: false })
    }
  }



  render() {
    const navigator = this.props.navigator;

    console.log("News", this.news);

    return (


      <View style={styles.container}>
        <Header title={"Trending"} />

        <View style={styles.viewWrapScrollView}>
          <ScrollView horizontal style={styles.scrollViewFilters}
          >
            {
              _.map(this.filterContent, (function showFilterElement(filterContentItem) {
                return (
                  <TouchableHighlight key={filterContentItem.id} onPress={
                    (() => {
                      this.filterNewsContent(filterContentItem.categoryId)
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
          renderRow={(house) =>
              <PropertyCell key={house._id} house={house} />

          }
        />

        <Tabbar navigator={navigator} />
        {this.state.loading && <ActivityIndicator style={styles.loading} color="black" />}
      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapScrollView: {
    height: 140,
  },
  scrollViewFilters: {
    backgroundColor: 'yellow',
    height: 100,
    flex: 1,
  },
  listContainer: {

  },
  loading: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2,
    right: Dimensions.get('window').width / 2,
  }
});
