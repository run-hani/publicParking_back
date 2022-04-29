import dotenv from 'dotenv';
import applyDotenv from "../lambdas/applyDotenv.js";

export default function BoardModel(mongoose){
  const { mongoUri } = applyDotenv(dotenv);

  const boardSchema = mongoose.Schema({
    areaName: String,
    parkingName: String,
    divisionCount: String,
    charge: String,
    adressLotNumber: String,
    adressRoadName: String,
    operDay: String
  });

  return mongoose.model("Board", boardSchema);
}
