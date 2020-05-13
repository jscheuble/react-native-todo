import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

const Form = props => {
    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => props.handleSubmit(text)} title='add todo' color='#FCE303' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd'
    }
})

export default Form;