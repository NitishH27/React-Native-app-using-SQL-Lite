import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Navbar = ({ title }) => {
    const navigation = useNavigation();
    const route = useRoute();

    const navigateToHomeScreen = () => {
        navigation.navigate('Home');
    };

    const navigateToAddItem = () => {
        navigation.navigate('AddItem');
    };

    const navigateToViewItems = () => {
        navigation.navigate('ViewItems');
    };

    const navigateToEditItem = () => {
        navigation.navigate('EditItem');
    };

    const navigateToDeleteItem = () => {
        navigation.navigate('DeleteItem');
    };

    const isHomeScreen = route.name === 'Home';
    const isAddItemScreen = route.name === 'AddItem'; // Check if on AddItem screen

    return (
        <ImageBackground
            source={require('../drawable/bg.jpg')}
            style={styles.navbar}
            resizeMode="cover"
        >
            <Text style={styles.title}>{title}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={navigateToViewItems}>
                    <Text style={styles.buttonText}>View Items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={navigateToEditItem}>
                    <Text style={styles.buttonText}>Edit Item</Text>
                </TouchableOpacity>
                {isHomeScreen && ( // Only show the "Add Item" button on the Home screen
                    <TouchableOpacity style={styles.button} onPress={navigateToAddItem}>
                        <Text style={styles.buttonText}>Add Item</Text>
                    </TouchableOpacity>
                )}
                {!isHomeScreen && !isAddItemScreen && ( // Show "Home" button on all screens except Home and AddItem
                    <TouchableOpacity style={styles.button} onPress={navigateToHomeScreen}>
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.button} onPress={navigateToDeleteItem}>
                    <Text style={styles.buttonText}>Delete Item</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    button: {
        backgroundColor: 'transparent',
        padding: 5,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Navbar;
