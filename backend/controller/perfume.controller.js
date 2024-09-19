import { Perfume } from "../model/perfume.model.js";

export const allPerfume = async (req, res) => {
  try {
    let perfume = await Perfume.find();
    res.status(200).json(perfume);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const onePerfume = async (req, res) => {
  try {
    const { id } = req.params;
    const perfume = await Perfume.findById(id);
    res.status(200).json(perfume);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
