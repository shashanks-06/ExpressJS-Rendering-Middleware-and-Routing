import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;
import profanityFilter from "../utils/profanityFilter.js";

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
  createdAt: { type: Date, default: Date.now },
  isApproved: {
    type: Boolean,
    default: true,
  },
});

postSchema.pre("validate", function (next) {
  if (!this.isModified("content")) {
    return next();
  }

  if (profanityFilter(this.content)) {
    this.isApproved = false;
    next();
  } else {
    next();
  }
});

const Post = model("Post", postSchema);

export default Post;
