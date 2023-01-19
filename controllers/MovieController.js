import Movie from "../models/Movie.js";

const MovieController = {};

   MovieController.getAll = async (req, res) => {    //funcion async
    try {
      const movie = await Movie.find({});                //funcion promesa

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved successfully",
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
   MovieController.getById = async (req, res) => {
      try {
         const id = req.params.id
         const movie = await Movie.findOne({id:id});
   
         //tengo que restringuir la busqueda
   
         return res.status(200).json({
            success: true,
            message: "Get por id retrieved sucessfully",
            results: movie,
         });
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: "Error retrieving id",
            error: error.message,
         });
      }
   };
   MovieController.getById = async (req, res) => {
      try {
         const id = req.params.id
         const movie = await Movie.findOne({id:id});
   
         //tengo que restringuir la busqueda
   
         return res.status(200).json({
            success: true,
            message: "Get por id retrieved sucessfully",
            results: movie,
         });
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: "Error retrieving id",
            error: error.message,
         });
      }
   };
   

export default MovieController;