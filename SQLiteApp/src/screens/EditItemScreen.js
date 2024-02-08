import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Text } from 'react-native';
import { updateItem } from '../database';

const EditItemScreen = ({ route }) => {
    const { initialName, initialDescription, initialQuantity } = route.params || {};
    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);
    const [quantity, setQuantity] = useState(String(initialQuantity));

    const handleUpdateItem = () => {
        updateItem(name, description, quantity);
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
                    onPress={handleUpdateItem}
                >
                    <Text style={styles.buttonText}>Update Item</Text>
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
        padding: 20,
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
        width: '100%',
        height: 40,
        backgroundColor: '#841584',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditItemScreen;
