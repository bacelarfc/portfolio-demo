import mongoose from 'mongoose';

const workExperienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    responsibilities: { type: [String]} ,
    technologies: { type: [String] }
  });

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  githubLink: { type: String },
  imageUrl: { type: String },
  workExperience: { type: [workExperienceSchema], required: false },
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;