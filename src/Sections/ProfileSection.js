import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
    TouchableHighlight,
    Image,
    AsyncStorage,
} from 'react-native';

import Header from '../Component/Header';
import Tabbar from '../Component/TabBar';
import FieldCell from '../Cell/FieldCell';
import _ from 'underscore';

var STORAGE_KEY_FAVORITE_HOUSES = 'Houses:favs';

export default class ProfileSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
        }
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

    render() {
        console.log("Favorites", this.state.favorites);
        const navigator = this.props.navigator;

        return (
            <View style={styles.container}>
                <Header title={"Profile"} />
                <View style={styles.content}>
                    <Image style={styles.imgProfile} source={require('../assets/mortadelo.png')} />

                    <FieldCell id={1} title={"Name"} description={'Mortadelo'} />
                    <FieldCell id={2} title={"Surname"} description={'Filemoncio Machete'} />
                    <FieldCell id={3} title={"Age"} description={'30'} />
                    <FieldCell id={3} title={"Fav. properties"} description={this.state.favorites.length} />
                </View>
                <Tabbar navigator={navigator} page={3} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    scrollViewFilters: {
        backgroundColor: 'yellow',
        height: 160,
    },
    imgProfile: {
        marginTop: 40,
        height: 160,
        width: 160,
        borderRadius: 80,
    }
});
