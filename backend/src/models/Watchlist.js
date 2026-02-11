import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    movieId: {
      type: Number, // must match frontend movie id
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    poster: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Watchlist", watchlistSchema);
