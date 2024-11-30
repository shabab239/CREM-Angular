import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {CustomizerSettingsService} from '../../customizer-settings/customizer-settings.service';
import {Task} from "./task.model";
import {FormsModule} from "@angular/forms";
import {User} from "../../authentication/model/user.model";
import {UserService} from "../../hr/user.service";
import {ApiResponse} from "../../util/api.response.model";
import {AlertUtil} from "../../util/alert.util";
import {TaskService} from "./task.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-to-do-list',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, FormsModule, NgForOf, DatePipe],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {

    // Popup Trigger
    classApplied = false;

    // isToggled
    isToggled = false;


    task: Task = new Task();
    tasks: Task[] = [];
    employees: User[] = [];

    errors: { [key: string]: string } = {};

    constructor(
        public themeService: CustomizerSettingsService,
        private userService: UserService,
        private taskService: TaskService,
        private route: ActivatedRoute
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        let stageId = this.route.snapshot.params['id'];
        this.loadTasks();
        this.loadEmployees();
    }

    toggleClass(taskId?: number) {
        if (taskId) {
            this.taskService.getById(taskId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.task = response.data['task'];
                    } else {
                        AlertUtil.error(response);
                    }
                },
                error: error => {
                    AlertUtil.error(error);
                }
            });
        }
        this.classApplied = !this.classApplied;
    }

    loadEmployees() {
        this.userService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.employees = response.data['users'];
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    loadTasks() {
        this.taskService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.tasks = response.data['tasks'];
                } else {
                    AlertUtil.error(response);
                }
            },
            error: error => {
                AlertUtil.error(error);
            }
        });
    }

    submitTask() {
        let apiResponse: Observable<ApiResponse> = this.task.id ?
            this.taskService.update(this.task) : this.taskService.save(this.task);

        apiResponse.subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.task = new Task();
                    this.errors = {};
                    this.loadTasks();
                    this.classApplied = false;
                    AlertUtil.success(response);
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

    getEmployeesString(employees: User[]) {
        return employees.map(e => e.name).join(', ');
    }

}
