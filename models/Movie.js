import { Schema, model } from "mongoose";



const MovieSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
      },
      vote_average: {
         type: String,
         required: true,
      },
      id: {
         type: Number,
         required: true,

      },
 
   }
);

const Movie = model("Movie", MovieSchema);

export default Movie;