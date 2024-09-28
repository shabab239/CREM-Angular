import {User} from "./user.model";


export class Token {
  id: number;
  username: string;
  password: string;
  user: User = new User();
}
