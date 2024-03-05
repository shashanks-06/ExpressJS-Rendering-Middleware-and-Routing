import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isApprove: {
    type: Boolean,
    default: true,
  },
});

const Post = new model("Post", postSchema);

export default Post;
