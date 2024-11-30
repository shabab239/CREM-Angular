import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { RawMaterial } from '../model/raw-material.model';
import { Observable } from 'rxjs';
import {AlertUtil} from "../../../util/alert.util";
import {ApiResponse} from "../../../util/api.response.model";
import {RawMaterialService} from "../raw-material.service";

@Component({
  selector: 'app-raw-material-form',
  standalone: true,
  imports: [RouterLink, NgForOf, NgIf, NgClass, FormsModule],
  templateUrl: './raw-material-form.component.html',
  styleUrl: './raw-material-form.component.scss'
})
export class RawMaterialFormComponent implements OnInit {
  errors: { [key: string]: string } = {};
  rawMaterial: RawMaterial = new RawMaterial();

  constructor(
    private rawMaterialService: RawMaterialService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let rawMaterialId = this.route.snapshot.params['id'];
    if (rawMaterialId) {
      this.rawMaterialService.getById(rawMaterialId).subscribe({
        next: (response: ApiResponse) => {
          if (response && response.successful) {
            this.rawMaterial = response.data['rawMaterial'];
          } else {
            this.errors = response?.errors || {};
            AlertUtil.error(response);
          }
        },
        error: error => {
          AlertUtil.error(error);
        }
      });
    }
  }

  protected save(): void {
    let apiResponse: Observable<ApiResponse> = this.rawMaterial.id ?
      this.rawMaterialService.update(this.rawMaterial) :
      this.rawMaterialService.save(this.rawMaterial);

    apiResponse.subscribe({
      next: response => {
        if (response && response.successful) {
          AlertUtil.success(response);
          this.router.navigate(['/dashboard/raw-materials']);
        } else {
          this.errors = response?.errors || {};
          AlertUtil.error(response);
        }
      },
      error: error => {
        AlertUtil.error(error);
      }
    });
  }
}
