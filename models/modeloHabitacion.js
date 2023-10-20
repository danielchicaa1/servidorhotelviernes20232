import mongoose from "mongoose";
const Schema=mongoose.Schema;
const Habitacion=new Schema({
    nombre:{
        type: String,
        requeried:true
    },
    foto:{
        type:String,
        requeried:true
    },
    descripcion:{
        type:String,
        requeried:true
    },
    precioNoche:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion=mongoose.model('Habitaciones',Habitacion)