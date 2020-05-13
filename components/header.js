import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To Do:</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 300,
        width: 700,
        paddingTop: 100,
        backgroundColor: '#FCE303',
        zIndex: 1,
        marginTop: 20
    },
    title: {
        textAlign: 'center',
        paddingTop: 95,
        color: '#000000',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 20,
        zIndex: 1
    }
});

