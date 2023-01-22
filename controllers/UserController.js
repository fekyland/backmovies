import User  from "../models/User.js";


const UserController = {};

UserController.getAll = async (req, res) => {
   console.log(req.params)
   try {
      const users = await User.find();

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved successfully",
         data: users,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

UserController.getById = async (req, res) => {
   try {
      const id = req.params.id
      const users = await User.findOne({ObjectId:id});

      return res.status(200).json({
         success: true,
         message: "Get all rented movies retrieved successfully",
         data: users,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

UserController.rentUserMovies = async (req, res) => {
   console.log(req.params);
   try {
     const user = await User.findById(req.params.userId);
     console.log(user)
     //const movie = req.params.movieId;
     const movie = req.body;
     //console.log("validacion de alquiler")
     //console.log(movie)
     //const match = user.movies.find((m) => m == movie);
    const match = false;
     if (match) {
       res.json({
         message: "User already have this movie",
         inserted: false,
       });
     } else {
       const updatedUser = await User.updateOne(
         { _id: req.params.userId },
         { $push: { movies: req.params.movieId } }
       );
       res.json({
         message: "User movies updated successfully",
         data: updatedUser,
         inserted: true,
         movies: user.movies,
       });
     }
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
  };
   UserController.deleteById = async (req,res) => {
    try {
       const deletedOne = await User.deleteOne({_id: req.params.id});
       res.json({
          message: `${req.params.id} DELETED`,
          data: deletedOne,
       });
    } catch (error){
       res.status(500).send ("internal error");
    };
 }

 
export default UserController;