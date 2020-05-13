import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TodoItem = props => {
    return (
        <TouchableOpacity onPress={() => props.clickHandler(props.item.key)}>
            <Text style={styles.item}>{props.item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 3,
        borderStyle: 'dotted',
        borderRadius: 10
    }
})

export default TodoItem;