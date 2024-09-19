import mongoose from "mongoose";

const perfumeSchema = mongoose.Schema({
  id: Number,
  name: String,
  rating: Number,
  price: Number,
  category: String,
  image: String,
  des: String,
});
export const Perfume = mongoose.model("perfume", perfumeSchema);
