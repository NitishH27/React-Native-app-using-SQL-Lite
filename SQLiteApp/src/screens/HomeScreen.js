import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../drawable/bg.jpg')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Assignment</Text>
                {/* Add your other components here */}
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
    },
});

export default HomeScreen;
