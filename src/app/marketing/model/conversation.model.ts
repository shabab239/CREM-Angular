import {User} from "../../authentication/model/user.model";
import {Lead} from "./lead.model";

export class Conversation {

    id?: number;
    date?: Date;
    followUpDate?: Date;
    lead: Lead = new Lead();
    customer: User = new User();
    employee: User = new User();
    description?: string;

}
