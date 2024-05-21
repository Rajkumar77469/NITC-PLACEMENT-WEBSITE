
const User = require('../Model/userModel');

const updateUserDetails = async (req, res) => {
  const { Name, Email } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { Email: req.user.Email }, // Assuming you have user details in req.user
      { Name, Email },
      { new: true, runValidators: true } // Add runValidators to validate the updated data
    );
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { updateUserDetails };