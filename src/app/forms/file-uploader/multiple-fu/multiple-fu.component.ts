import { Component } from '@angular/core';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
    selector: 'app-multiple-fu',
    standalone: true,
    imports: [FileUploadModule],
    templateUrl: './multiple-fu.component.html',
    styleUrl: './multiple-fu.component.scss'
})
export class MultipleFuComponent {}