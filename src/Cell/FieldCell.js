import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    StatusBar,
} from 'react-native';

import _ from 'underscore';


export default class FieldCell extends Component {
    state = {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }



    render() {
        const id = this.props.id;
        const title = this.props.title;
        const description = this.props.description;
        const { flexDirection, alignItems, justifyContent } = this.state

        return (

            <View style={styles.container}>
                <View style={styles.leftView}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.rightView}>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 5,
        height: 20,
        alignItems: 'center',
        borderWidth: 0.5,
        borderTopColor: '#bbb0',
        borderLeftColor: '#bbb0',
        borderRightColor: '#bbb0',
        borderBottomColor: '#bbb',
    },
    leftView: {
        width: 140,
        height: 30,
    },
    rightView: {
        flex: 1,
        height: 30,
    },
    title: {
        fontSize: 16,
        marginHorizontal: 10,
        fontWeight: "bold",
    },
    description: {
        fontSize: 18,
        marginLeft: 5,
    }
})