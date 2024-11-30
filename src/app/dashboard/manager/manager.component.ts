import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../dashboard.service';
import { ApiResponse } from '../../util/api.response.model';

interface ProjectStats {
    projectId: number;
    projectName: string;
    stageCount: number;
    completedStages: number;
    unitCount: number;
    soldUnits: number;
    projectProgress: number;
}

@Component({
    selector: 'app-manager',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './manager.component.html'
})
export class ManagerComponent implements OnInit {
    projects: ProjectStats[] = [];

    constructor(private dashboardService: DashboardService) {}

    ngOnInit() {
        this.loadProjectsData();
    }

    loadProjectsData() {
        this.dashboardService.getManagerDashboard().subscribe({
            next: (response: ApiResponse) => {
                if (response.successful && response.data?.projects) {
                    this.projects = response.data.projects;
                }
            },
            error: (error) => console.error('Error loading projects:', error)
        });
    }
}
