import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { getItems } from '../database';

const ViewItemScreen = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Retrieve items from the database when the component mounts
        getItems(setItems);
    }, []);

    return (
        <ImageBackground source={require('../drawable/bg.jpg')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>ITEMS:</Text>
                {items.map(item => (
                    <Text key={item.id} style={styles.item}>{item.name} - {item.description} - {item.quantity}</Text>
                ))}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10, // Add margin bottom to the title
    },
    item: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 5, // Add margin bottom to each item
    },
});

export default ViewItemScreen;
