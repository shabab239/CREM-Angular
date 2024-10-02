import {User} from "../../../authentication/model/user.model";
import {Booking} from "./booking.model";

export class Payment {
    id: number;
    amount: number;
    date: Date;
    groupTransactionId: string
    booking: Booking = new Booking();
    customer: User = new User();
}
