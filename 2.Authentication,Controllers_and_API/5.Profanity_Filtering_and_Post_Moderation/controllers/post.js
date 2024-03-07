import Post from "../models/post.js";

export const getAllPosts = () =>
  Post.find({ isApproved: true }).populate("user", "name _id");

//populate() is used to collect and fetch data from multiple collections based on reference linkage
// here reference linkage is "user"

export const getPost = (id) => Post.findById(id).populate("user", "name _id");

export const createPost = ({ title, content, user }) =>
  Post.create({ title, content, user });

export const deletePost = (id) => Post.findByIdAndDelete(id);

export const getFlaggedPosts = () =>
  Post.find({ isApproved: false }).populate("user", "name _id");

export const approvePost = (id) =>
  Post.findByIdAndUpdate(id, { isApproved: true });
