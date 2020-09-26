import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Switch, Button, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Input } from 'react-native-elements';

class ReserveSpace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            comments: ''
        };
    }

    static navigationOptions = {
        title: 'Reserve A Space'
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.setState({
            date: '',
            comments: ''
        });
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date</Text>
                    <DatePicker
                        style={{flex: 2, marginRight: 20}}
                        date={this.state.date}
                        format='YYYY-MM-DD'
                        mode='date'
                        placeholder='Select Date'
                        minDate={new Date().toISOString()}
                        confirmBtnText='Confirm'
                        cancelBtnText='Cancel'
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={date => {this.setState({date: date})}}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Comments</Text>
                    <Input 
                        placeholder = 'Comments'
                        leftIcon = {{ type: 'font-awesome', name: 'comment' }}
                        leftIconContainerStyle = {{
                            paddingRight: 10
                        }}
                        onChangeText = {(comments)=>this.setState({author: comments})}
                        value = {this.state.comments}
                    />
                </View>
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleReservation()}
                        title='Request'
                        color='#5637DD'
                        accessibilityLabel='Tap me to search for available dates to reserve'
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    }
});

export default ReserveSpace;