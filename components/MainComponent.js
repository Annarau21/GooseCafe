//Main imports

import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

//Imports from Components

import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import ReserveSpace from './ReserveSpaceComponent';

//Navigation

const MenuNavigator = createStackNavigator(
    {
        Menu: {screen: Menu}
    },
    {
        initalRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#dd7f37'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Image
            source={require('./images/Geese/GooseClipart_2.png')}
            style={{height: 50, width: 50, margin: 10, marginBottom: 20}}
            onPress={() => navigation.toggleDrawer()}
            />
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#dd7f37'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Image
            source={require('./images/Geese/GooseClipart_2.png')}
            style={{height: 50, width: 50, margin: 10, marginBottom: 20}}
            onPress={() => navigation.toggleDrawer()}
            />
        }
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#dd7f37'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Image
            source={require('./images/Geese/GooseClipart_2.png')}
            style={{height: 50, width: 50, margin: 10, marginBottom: 20}}
            onPress={() => navigation.toggleDrawer()}
            />
        }
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#dd7f37'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Image
            source={require('./images/Geese/GooseClipart_2.png')}
            style={{height: 50, width: 50, margin: 10, marginBottom: 20}}
            onPress={() => navigation.toggleDrawer()}
            />
        }
    }
);

const ReserveSpaceNavigator = createStackNavigator(
    {
        ReserveSpace: { screen: ReserveSpace }
    },
    {
        navigationOptions: {
            drawerLabel: 'Reserve A Space',
            headerStyle: {
                backgroundColor: '#dd7f37'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Image
            source={require('./images/Geese/GooseClipart_2.png')}
            style={{height: 50, width: 50, margin: 10, marginBottom: 20}}
            onPress={() => navigation.toggleDrawer()}
            />
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Menu: { screen: MenuNavigator },
        ReserveSpace: { screen: ReserveSpaceNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#dd7f37'
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;