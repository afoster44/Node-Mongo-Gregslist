import ValueSchema from "../models/Value";
import CarSchema from "../models/Car";
import mongoose from "mongoose";
import HouseSchema from "../models/House"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema)

  Houses = mongoose.model("House", HouseSchema)
}

export const dbContext = new DbContext();
