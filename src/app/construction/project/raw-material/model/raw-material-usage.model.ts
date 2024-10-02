import {RawMaterial} from "./raw-material.model";
import {ConstructionStage} from "../../stage/stage.model";

export class RawMaterialUsage {
  id: number;
  quantity: number;
  entryDate: Date;
  rawMaterial: RawMaterial = new RawMaterial();
  stage: ConstructionStage = new ConstructionStage();
}
