import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';
import { addItem } from '../database';

const AddItemScreen = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAddItem = () => {
        addItem(name, description, quantity, () => {
            // Optionally, you can navigate to another screen after adding the item
            // For example:
            // navigation.navigate('ViewItems');
        });
    };

    return (
        <ImageBackground source={require('../drawable/bg.jpg')} style={styles.background}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Quantity"
                    value={quantity}
                    onChangeText={setQuantity}
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAddItem}
                >
                    <Text style={styles.buttonText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        flexDirection:'row'
    },
    button: {
        width: '80%', 
        height: 40,
        backgroundColor: '#841584',
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10,
        marginTop: 10,
    },
    
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign:"center"
    },
});

export default AddItemScreen;
