import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectRoutes from './routes/router.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.static("../client/dist"));
app.use(express.static("public"));
app.use(express.json()); 

app.use('/api/projects', projectRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
