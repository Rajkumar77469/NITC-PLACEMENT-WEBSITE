// const User = require("../Model/userModel");
// const bcrypt = require("bcrypt");// UserController.js

// // Controller to fetch user details
// const fetchUserDetails = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const userDetails = {
//       Name: user.Name,
//       Email: user.Email
//     };
//     res.json(userDetails);
//   } catch (error) {
//     console.error("Error fetching user details:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Controller to update user details
// const updateUserDetailscontroller = async (req, res) => {
//   try {
//     const { Name, Email, password } = req.body;
//     const userId = req.user.id;

//     let user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update user details
//     user.Name = Name || user.Name;
//     user.Email = Email || user.Email;

//     // Hash and update password if provided
//     if (password) {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       user.password = hashedPassword;
//     }

//     // Save updated user details to the database
//     user = await user.save();

//     res.json({ message: "User details updated successfully", user });
//   } catch (error) {
//     console.error("Error updating user details:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = {
//   fetchUserDetails,
//   updateUserDetailscontroller
// };
const User = require("../Model/userModel");
const findAndUpdateDetailsController = async (req, res) => {
  try {
    const loggedInUserId = req.query.userId;

    // Assuming you need to find the user details first
    const user = await User.findOne({ _id: loggedInUserId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { Name, Email } = req.body;

    // Update user details
    user.Name = Name;
    user.Email = Email;
 // Ensure you handle password securely (e.g., hashing)

    // Save the updated user
    const updatedUser = await user.save();

    res.json({ message: "User details updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ message: "Server error" });
  }
};


  

const updateUserDetailsController = async (req, res) => {
  try {
    const loggedInUserId = req.query.userId;

    const { name, email, password } = req.body;

    // Update user details directly
    const updatedUser = await User.findOneAndUpdate(
      { _id: loggedInUserId },
      { name, email, password }, // Ensure you handle password securely (e.g., hashing)
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.json({ message: "User details updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  updateUserDetailsController,
  findAndUpdateDetailsController
};
