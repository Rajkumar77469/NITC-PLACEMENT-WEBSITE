
// const User = require("../Model/userModel");
// const findAndUpdateDetailsController = async (req, res) => {
//   try {
//     const loggedInUserId = req.query.userId;

//     // Assuming you need to find the user details first
//     const user = await User.findOne({ _id: loggedInUserId });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const { Name, Email } = req.body;

//     // Update user details
//     user.Name = Name;
//     user.Email = Email;
//  // Ensure you handle password securely (e.g., hashing)

//     // Save the updated user
//     const updatedUser = await user.save();

//     res.json({ message: "User details updated successfully", user: updatedUser });
//   } catch (error) {
//     console.error("Error updating user details:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


  

// const updateUserDetailsController = async (req, res) => {
//   try {
//     const loggedInUserId = req.query.userId;

//     const { name, email, password } = req.body;

//     // Update user details directly
//     const updatedUser = await User.findOneAndUpdate(
//       { _id: loggedInUserId },
//       { name, email, password }, // Ensure you handle password securely (e.g., hashing)
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }
    
//     res.json({ message: "User details updated successfully", user: updatedUser });
//   } catch (error) {
//     console.error("Error updating user details:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = {
//   updateUserDetailsController,
//   findAndUpdateDetailsController
// };


// UserController.js





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