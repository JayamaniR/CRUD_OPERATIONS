const User=require('../models/user.model');
const CreateUser=async(req,res)=>{
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const getUserDetails=async(req,res)=>{
    try {
        const users = await User.find({});
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const getUserDetails_byId=async(req,res)=>{
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const updateUserDetails=async(req,res)=>{
    try {
        const { id } = req.params;
        const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "User not found" });
        res.status(200).json(updated);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deleteUserDetails=async(req,res)=>{
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    
}

module.exports={
    CreateUser,
    getUserDetails,
    getUserDetails_byId,
    updateUserDetails,
    deleteUserDetails
}
