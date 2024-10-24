import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

let client;
let db;

const connectToDb = async () => {
    try {
        if (!client) {
            client = await MongoClient.connect(DATABASE_URL);
            db = client.db();
            console.log('Successfully connected to database.');
        }
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

const getDb = () => {
    if (!db) {
        throw new Error('Database connection not initialized.');
    }
    return db;
};

const closeDb = async () => {
    if (client) {
        await client.close();
        client = null;
        db = null;
        console.log('Database connection closed.');
    }
};

export { connectToDb, getDb, closeDb };
