import { Schema, model } from "mongoose"

// Define el esquema para los comentarios
const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },    
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model("Post", postSchema)
