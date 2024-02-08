import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';
import { deleteItemByName } from '../database';

const DeleteItemScreen = () => {
    const [itemName, setItemName] = useState('');

    const handleDeleteItem = () => {
        deleteItemByName(itemName, () => {
            // Optionally, you can handle the deletion completion here
        });
    };

    return (
        <ImageBackground source={require('../drawable/bg.jpg')} style={styles.background}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter item name to delete"
                    value={itemName}
                    onChangeText={setItemName}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleDeleteItem}
                >
                    <Text style={styles.buttonText}>Delete Item</Text>
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
    },
});

export default DeleteItemScreen;
