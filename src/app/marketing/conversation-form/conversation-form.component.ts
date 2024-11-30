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
    leadId: number;
    conversation: Conversation = new Conversation();
    leads: Lead[] = [];
    users: User[] = [];

    constructor(
        private conversationService: ConversationService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.leadId = this.route.snapshot.params['id'];
    }

    save(): void {
        this.conversation.lead.id = this.leadId;
        this.conversationService.save(this.conversation).subscribe({
            next: (response) => {
                if (response && response.successful) {
                    AlertUtil.success(response);
                    this.router.navigate(['/dashboard/marketing/conversations', this.leadId]);
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
