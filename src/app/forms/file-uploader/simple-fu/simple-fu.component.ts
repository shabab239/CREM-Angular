import { Component } from '@angular/core';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
    selector: 'app-simple-fu',
    standalone: true,
    imports: [FileUploadModule],
    templateUrl: './simple-fu.component.html',
    styleUrl: './simple-fu.component.scss'
})
export class SimpleFuComponent {

    // File Uploader
    public multiple: boolean = false;

}