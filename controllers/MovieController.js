import Movie from "../models/Movie.js";

const MovieController = {};

MovieController.getAll = async (req, res) => {
   try {
      const movie = await Movie.find({});

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved succsessfully",
         results: movie,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

export default MovieController;