import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { DRINKS } from '../shared/drinks';
import { FOOD } from '../shared/food';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/beans.jpg')}>
                <Text
                    style={{margin: 10}}>
                    {item.price}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drinks: DRINKS,
            food: FOOD
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <Text
                style={styles.header}
                > Goose Cafe </Text>
                <Image 
                source={require('./images/Geese/Goose_1.jpg')}
                style={styles.mainImage}
                />
                <RenderItem
                item={this.state.drinks[0]} />
                <RenderItem
                item={this.state.food[0]} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainImage: {
        height: 500,
        width: 'auto',
        margin: 10,
        borderRadius: 5,
    },
    header: {
        fontSize: 50,
        alignSelf: 'center',
        backgroundColor: '#3b3630',
        color: '#ffffff',
        padding: 10,
        margin: 20,
        marginTop: 50
    }


});

export default Home;