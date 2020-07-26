import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amountLeft: 250};
    }
    
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View>
                        <Text style={styles.topText}>Amount Left: </Text>
                    </View>
                    <View>
                        <Text style={styles.amountText}>${this.state.amountLeft}</Text>
                    </View>
                </View>
                <View style={styles.calendarContainer}>
                    <View style={styles.monthYearContainer}>
                        <Text style={styles.monthYearText}>September, 2019</Text>
                    </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        backgroundColor: '#679868',
        flex: 0.25,
        flexDirection: 'row',
    },
    calendarContainer: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 25,
    },
    monthYearContainer: {
        backgroundColor: '#D9D9D9',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 25,
        flex:0.05,
        marginLeft: 25,
        marginRight: 25,
        borderRadius:5,
    },
    monthYearText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 5,
    },
    dayContainer: {
        backgroundColor: '#D9D9D9',
        borderColor: 'black',
        borderWidth: 1,
        width: 500,
        height: 500,
    },
    dayText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 5,
    },
    topText: {
        color: 'white',
        fontSize: 36,
        textAlign: 'left',
        lineHeight: 350,
        marginTop: -75,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    amountText: {
        color: 'white',
        fontSize: 36,
        textAlign: 'left',
        lineHeight: 350,
        marginTop: -75,
        textDecorationLine: "underline",
        fontWeight: 'bold',
    }
})