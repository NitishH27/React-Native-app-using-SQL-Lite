import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import ViewItemsScreen from './src/screens/ViewItemScreen';
import EditItemScreen from './src/screens/EditItemScreen';
import Navbar from './src/screens/Navbar';
import { View, ImageBackground, StyleSheet } from 'react-native';
import DeleteItemScreen from './src/screens/DeleteItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ImageBackground
      source={require('./src/drawable/bg.jpg')} // Change the path to your image
      style={styles.container}
      resizeMode="cover"
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <Navbar {...props} />,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="AddItem"
            component={AddItemScreen}
            options={{ title: 'Add Item' }}
          />
          <Stack.Screen
            name="ViewItems"
            component={ViewItemsScreen}
            options={{ title: 'View Items' }}
          />
          <Stack.Screen
            name="EditItem"
            component={EditItemScreen}
            options={{ title: 'Edit Item' }}
          />
          <Stack.Screen
            name="DeleteItem"
            component={DeleteItemScreen}
            options={{ title: 'Delete Item' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
