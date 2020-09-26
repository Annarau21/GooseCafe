import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    }

    render () {
        return (
            <ScrollView>
                <Card title="Contact Information">
                    <Text> 123 45th St </Text>
                    <Text> Minneapolis, MN, 55406 </Text>
                    <Text style={{marginBottom: 10}} > U.S.A. </Text>  
                    <Text> Phone: 1-123-456-7890 </Text>
                    <Text> Email: goose@gmail.com </Text>   
                </Card>
            </ScrollView>
        )
    }
}

export default Contact;