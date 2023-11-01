import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema(
  {    
    nombre: {
      type: String,
      required: [true, "Ingrese nombre del juego"],
      maxLength: [40, "El nombre no puede exceder 40 caracteres"],
      trim: true,
    },    
    description: {
      type: String,
      required: [true, "Ingrese descripción del juego"],
      trim: true,
    },
    boxImage: {
      type: String,      
    },
    poster: {
      type: String,
    }, 
    image1: {
      type: String,
    },     
    image2: {
      type: String,
    }, 
    image3: {
      type: String,
    }, 
    image4: {
      type: String,
    },  
    price: {
      type: Number, 
      required: [true, "Ingrese precio del juego"],      
      default: 0.0,
    },
    category: {
      type: String,
      required: [true, "Ingrese categoría del juego"],      
      trim: true,
    },
  },
  { timestamps: true }
);

const Juego = mongoose.models.Juego || mongoose.model("Juego", juegoSchema);

export default Juego;
