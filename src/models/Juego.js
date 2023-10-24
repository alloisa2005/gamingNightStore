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
    image: {
      type: String,
    },      
  },
  { timestamps: true }
);

const Juego = mongoose.models.Juego || mongoose.model("Juego", juegoSchema);

export default Juego;
