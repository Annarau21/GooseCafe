import React, { Component } from 'react';
import { FlatList, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DRINKS } from '../shared/drinks';
import { FOOD } from '../shared/food';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drinks: DRINKS,
            food: FOOD
        };
    }

    static navigationOptions = {
        title: 'Menu'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderMenuItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.sizes}
                    rightTitle={item.price}
                    leftAvatar={{ source: require('./images/beans.jpg')}}
                />
            );
        };

        return (
            <ScrollView>
                <Text style={styles.header}> Warm Drinks </Text>
                <FlatList
                    data={this.state.drinks.filter(drink => drink.type === 'hot')}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
                <Text style={styles.header}> Cold Drinks </Text>
                <FlatList
                    data={this.state.drinks.filter(drink => drink.type === 'cold')}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
                <Text style={styles.header}> Coffee Sizes </Text>
                <Image source={require('./images/Drinks/sizes.jpg')} style={styles.sizes}/>
                <Text style={styles.header}> Bakery </Text>
                <Image source={require('./images/Geese/Goose_3.jpg')} style={styles.gooseImage}/>
                <FlatList
                    data={this.state.food}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        padding: 30,
        backgroundColor: '#5F9EA0',
        color: '#DEB887'
    },
    sizes: {
        width: 'auto',
        height: 850
    },
    gooseImage: {
        height: 500,
        width: 'auto'
    } 


});

export default Menu;