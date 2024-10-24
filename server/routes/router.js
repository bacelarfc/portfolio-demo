import express from 'express';
import { createProject, getProjects, updateProject, deleteProject } from '../databases/queries/queries.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
});

router.post('/', async (req, res) => {
  const projectData = req.body;
  console.log(projectData);
  try {
    const newProject = await createProject(projectData);
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ error: 'Error creating project' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updated = await updateProject(ObjectId(id), updatedData);
    if (!updated) {
      res.status(404).json({ error: 'Project not found' });
    } else {
      res.status(200).json({ message: 'Project updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating project' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await deleteProject(ObjectId(id));
    if (!deleted) {
      res.status(404).json({ error: 'Project not found' });
    } else {
      res.status(200).json({ message: 'Project deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting project' });
  }
});

export default router;
