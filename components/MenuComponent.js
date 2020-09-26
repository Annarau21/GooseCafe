import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DRINKS } from '../shared/drinks';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drinks: DRINKS
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
                    subtitle={item.price}
                    leftAvatar={{ source: require('./images/beans.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.drinks}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Menu;