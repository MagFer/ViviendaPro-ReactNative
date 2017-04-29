import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
    TouchableHighlight,
    Image,
} from 'react-native';

import Header from '../Component/Header';
import Tabbar from '../Component/TabBar';
import NewCell from '../Cell/NewCell';
import FilterCell from '../Cell/FilterCell';
import _ from 'underscore';

export default class ProfileSection extends Component {

    constructor(props) {
        super(props);

    }

    f

    render() {
        console.log("Profile", this.news);
        const navigator = this.props.navigator;

        return (
            <View style={styles.container}>
                <Header title={"Profile"} />
                <View style={styles.content}>

                    <Image style={styles.imgProfile} source={require('../assets/mortadelo.png')}/>
                    
                </View>
                <Tabbar navigator={navigator} page={3}/>
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
