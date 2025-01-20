import mongoose from "mongoose";
const youtubeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  chanel: {
    type: String,

    requireed: true,
  },
  uploadDate: {
    type: Date,
  },
  like: {
    type: Number,
  },
  views: {
    type: Number,
  },
  video: {
    type: String,
  },
});

const youtubeModel = mongoose.model("youtubeModel", youtubeSchema);

export { youtubeModel };
