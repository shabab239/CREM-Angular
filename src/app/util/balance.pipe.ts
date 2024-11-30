import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'balanceFormat',
    standalone: true
})
export class BalanceFormatPipe implements PipeTransform {
    transform(value: number): string {
        if (value < 0) {
            return `(${Math.abs(value).toFixed(2)})`;
        }
        return value.toFixed(2);
    }
}
