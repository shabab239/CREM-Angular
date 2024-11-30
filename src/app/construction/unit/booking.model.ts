import {Unit} from "./unit.model";
import {User} from "../../authentication/model/user.model";

export class Booking {
  id: number;
  bookingDate: Date;
  unit: Unit = new Unit();
  customer: User = new User();
}
