import { User } from '../authentication/model/user.model';
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'formatRole',
    standalone: true
})
export class FormatRolePipe implements PipeTransform {
    transform(value: User['role']): string {
        return value?.toString().split('ROLE_')[1] || '';
    }
}
