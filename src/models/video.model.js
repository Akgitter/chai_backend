import mongoose, { schema } from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudnary
      requrired: true,
    },
    thumbnail: {
      type: String, //cloudnary Url
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "",
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.pulgin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);

//bcrypt helps you to hash your passord
// Tokes
//Jwt jason web tokens create tokens
//
