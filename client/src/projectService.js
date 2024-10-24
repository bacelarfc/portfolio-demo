export const fetchProjects = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/projects');
    if (!response.ok) {
      throw new Error('Something went wrong.');
    }
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
