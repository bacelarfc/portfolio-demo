import { connectToDb, getDb, closeDb } from '../connection.js';

export async function getAllEvents() {
    try {
        await connectToDb();
        const db = getDb();
        const eventsCollection = db.collection('events');
        const events = await eventsCollection.find({}).toArray();
        return events;
    } catch (error) {
        throw error;
    } finally {
        await closeDb();
    }
}

export const createProject = async (projectData) => {
    try {
        await connectToDb();
        const db = getDb();
        const result = await db.collection('projects').insertOne(projectData);
        const newProject = { _id: result.insertedId, ...projectData };
        await closeDb();
        return newProject;
    } catch (error) {
        await closeDb();
        console.error('Error in createProject:', error);
        throw new Error('Error creating project');
    }
};

export async function getProjects() {
    try {
        await connectToDb();
        const db = getDb();
        const projects = await db.collection('projects').find().toArray();
        return projects;
    } catch (error) {
        throw error;
    } finally {
        await closeDb();
    }
}

export async function updateProject(projectId, updatedData) {
    try {
        await connectToDb();
        const db = getDb();
        const result = await db.collection('projects').updateOne(
            { _id: projectId },
            { $set: updatedData }
        );
        return result.modifiedCount > 0;
    } catch (error) {
        throw error;
    } finally {
        await closeDb();
    }
}

export async function deleteProject(projectId) {
    try {
        await connectToDb();
        const db = getDb();
        const result = await db.collection('projects').deleteOne({ _id: projectId });
        return result.deletedCount > 0;
    } catch (error) {
        throw error;
    } finally {
        await closeDb();
    }
}