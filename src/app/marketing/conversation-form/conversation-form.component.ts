import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../authentication/model/user.model';
import {Conversation} from "../model/conversation.model";
import {Lead} from "../model/lead.model";
import {ConversationService} from "../service/conversation.service";
import {LeadService} from "../service/lead.service";
import {UserService} from "../../hr/user.service";
import {ApiResponse} from "../../util/api.response.model";
import {AlertUtil} from "../../util/alert.util";

@Component({
    selector: 'app-conversation-form',
    standalone: true,
    imports: [NgForOf, FormsModule, NgIf, NgClass],
    templateUrl: './conversation-form.component.html',
    styleUrls: ['./conversation-form.component.scss']
})
export class ConversationFormComponent implements OnInit {
    errors: { [key: string]: string } = {};
    conversation: Conversation = new Conversation();
    leads: Lead[] = [];
    users: User[] = [];

    constructor(
        private conversationService: ConversationService,
        private leadService: LeadService,
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.loadLeads();
        this.loadUsers();

        let conversationId = this.route.snapshot.params['id'];
        if (conversationId) {
            this.conversationService.getById(conversationId).subscribe({
                next: (response: ApiResponse) => {
                    if (response && response.successful) {
                        this.conversation = response.data['conversation'];
                    } else {
                        this.errors = response?.errors || {};
                        AlertUtil.error(response);
                    }
                },
                error: (error) => {
                    AlertUtil.error(error);
                }
            });
        }
    }

    loadLeads(): void {
        this.leadService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.leads = response.data['leads'];
                } else {
                    AlertUtil.error(response);
                }
            },
            error: (error) => {
                AlertUtil.error(error);
            }
        });
    }

    loadUsers(): void {
        this.userService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.users = response.data['users'];
                } else {
                    AlertUtil.error(response);
                }
            },
            error: (error) => {
                AlertUtil.error(error);
            }
        });
    }

    save(): void {
        let apiResponse: Observable<ApiResponse> = this.conversation.id
            ? this.conversationService.update(this.conversation)
            : this.conversationService.save(this.conversation);

        apiResponse.subscribe({
            next: (response) => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/conversations']);
                } else {
                    this.errors = response?.errors || {};
                    AlertUtil.error(response);
                }
            },
            error: (error) => {
                AlertUtil.error(error);
            }
        });
    }
}
