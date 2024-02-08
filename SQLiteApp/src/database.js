import * as SQLite from 'expo-sqlite';

// Open or create a database
const db = SQLite.openDatabase('items.db');

// Initialize database
const initDatabase = () => {
    db.transaction(tx => {
        tx.executeSql(
            // Create table if not exists
            'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, quantity INTEGER)',
            [],
            () => console.log('Database initialized'),
            error => console.log('Error initializing database:', error)
        );
    });
};

// Function to add an item to the database
const addItem = (name, description, quantity, callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO items (name, description, quantity) VALUES (?, ?, ?)',
            [name, description, quantity],
            (_, result) => {
                console.log('Item added successfully');
                callback(result.insertId);
            },
            (_, error) => console.log('Error adding item:', error)
        );
    });
};

// Function to retrieve all items from the database
const getItems = (callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM items',
            [],
            (_, { rows: { _array } }) => callback(_array),
            (_, error) => console.log('Error retrieving items:', error)
        );
    });
};

// Function to update an item in the database
const updateItem = (name, description, quantity) => {
    db.transaction(tx => {
        tx.executeSql(
            'UPDATE Items SET description = ?, quantity = ? WHERE name = ?',
            [description, quantity, name],
            () => console.log('Item updated successfully'),
            (_, error) => console.log('Error updating item:', error)
        );
    });
};


// Function to delete an item from the database
const deleteItemByName = (name, callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'DELETE FROM items WHERE name = ?',
            [name],
            () => {
                console.log('Item deleted successfully');
                callback();
            },
            (_, error) => console.log('Error deleting item:', error)
        );
    });
};
export { initDatabase, addItem, getItems, updateItem, deleteItemByName };
