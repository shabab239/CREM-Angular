import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ConstructionStage, StageStatus, StageStatusOptions} from "../stage.model";
import {StageService} from "../stage.service";
import {ApiResponse} from "../../../../util/api.response.model";
import {AlertUtil} from "../../../../util/alert.util";

@Component({
  selector: 'app-all-stages',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './all-stages.component.html'
})
export class AllStagesComponent implements OnInit {
  stages: ConstructionStage[] = [];
  selectedStatus: StageStatus | '' = '';
  statusOptions = [
    { value: '', label: 'All Stages' },
    ...StageStatusOptions
  ];

  constructor(private stageService: StageService) {}

  ngOnInit() {
    this.getStages();
  }

  getStages() {
    if (this.selectedStatus) {
      this.stageService.getAllStagesByStatus(this.selectedStatus).subscribe({
        next: (response: ApiResponse) => {
          if (response && response.successful) {
            this.stages = response.data.constructionStages;
          } else {
            AlertUtil.error(response);
          }
        },
        error: error => {
          AlertUtil.error(error);
        }
      });
    } else {
      this.stageService.getAllStages().subscribe({
        next: (response: ApiResponse) => {
          if (response && response.successful) {
            this.stages = response.data.constructionStages;
          } else {
            AlertUtil.error(response);
          }
        },
        error: error => {
          AlertUtil.error(error);
        }
      });
    }
  }

  deleteStage(stageId: number) {
    this.stageService.deleteStageById(stageId).subscribe({
      next: (response: ApiResponse) => {
        if (response && response.successful) {
          AlertUtil.success(response);
          this.getStages();
        } else {
          AlertUtil.error(response);
        }
      },
      error: error => {
        AlertUtil.error(error);
      }
    });
  }

  onStatusChange() {
    this.getStages();
  }

  getStatusClass(status: StageStatus): string {
    switch(status) {
      case StageStatus.NOT_STARTED:
        return 'trezo-badge cancelled';
      case StageStatus.IN_PROGRESS:
        return 'trezo-badge warning';
      case StageStatus.COMPLETED:
        return 'trezo-badge';
      default:
        return 'trezo-badge';
    }
  }
}
