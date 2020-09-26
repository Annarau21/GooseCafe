import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';
import { DRINKS } from '../shared/drinks';
import { FOOD } from '../shared/food';

function RenderItem({item}) {
    if(item.type) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/Drinks/coffee.jpg')}>
                <Text style={{margin: 10}}> {item.sizes} </Text>
                <Text style={{margin: 10}}> ${item.price} </Text>
            </Card>
        );
    }
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/Drinks/coffee.jpg')}>
                <Text style={{margin: 10}}> {item.sizes} </Text>
                <Text style={{margin: 10}}> {item.price} </Text>
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
                <ImageBackground source={require('./images/Geese/Goose_4.jpg')} style={styles.imageBackground}>
                    <Text style={styles.header}> Goose Cafe </Text>
                </ImageBackground>
                <RenderItem
                item={this.state.drinks[0]} />
                <RenderItem
                item={this.state.food[0]} />
                <Card
                    title="We have a Space you can rent to host gatherings."
                    image={require('./images/interior.jpg')}>
                    <Text>Request a Time on our Reserve A Space page</Text>
                </Card>
                      
                <ImageBackground source={require('./images/Geese/Goose_1.jpg')} style={styles.hoursImage}>
                    <Text style={styles.header}> Hours </Text>
                    <Text style={styles.hours}> M 7am - 6pm</Text>
                    <Text style={styles.hours}> T 7am - 6pm</Text>
                    <Text style={styles.hours}> W 7am - 6pm</Text>
                    <Text style={styles.hours}> T 7am - 6pm</Text>
                    <Text style={styles.hours}> F 7am - 6pm</Text>
                    <Text style={styles.hours}> S 7am - 5pm</Text>
                    <Text style={styles.hours}> S 7am - 5pm</Text>
                </ImageBackground>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        height: 300,
        width: 'auto',
        borderRadius: 5
    },
    hoursImage: {
        height: 500,
        width: 'auto',
        margin: 10,
        marginTop: 40
    },
    header: {
        fontSize: 50,
        alignSelf: 'center',
        padding: 10,
        margin: 20,
        fontWeight: 'bold'
    },
    hours: {
        fontSize: 20,
        alignSelf: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: '#ffff'
    },

});

export default Home;