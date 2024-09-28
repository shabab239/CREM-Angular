import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SimpleFuComponent } from './simple-fu/simple-fu.component';
import { MultipleFuComponent } from './multiple-fu/multiple-fu.component';

@Component({
    selector: 'app-file-uploader',
    standalone: true,
    imports: [RouterLink, SimpleFuComponent, MultipleFuComponent],
    templateUrl: './file-uploader.component.html',
    styleUrl: './file-uploader.component.scss'
})
export class FileUploaderComponent {}