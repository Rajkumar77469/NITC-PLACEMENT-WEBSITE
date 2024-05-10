// Controller methods for handling resume operations
const Resume = require('../Model/Resumemodel.js');

// Upload resume
exports.uploadResume = async (req, res) => {
  try {
    const { userId, fileUrl } = req.body; // Assuming fileUrl is the URL where the file is stored
    const resume = new Resume({ userId, fileUrl });
    await resume.save();
    res.status(201).json({ message: 'Resume uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete resume
exports.deleteResume = async (req, res) => {
  try {
    const { userId } = req.params;
    await Resume.findOneAndDelete({ userId });
    res.status(200).json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get user's resume
exports.getUserResume = async (req, res) => {
  try {
    const { userId } = req.params;
    const resume = await Resume.findOne({ userId });
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
