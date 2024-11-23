import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {DatePipe, NgFor, NgIf} from '@angular/common';
import { Conversation } from '../model/conversation.model';
import { ApiResponse } from '../../util/api.response.model';
import { AlertUtil } from '../../util/alert.util';
import {ConversationService} from "../service/conversation.service";

@Component({
    selector: 'app-conversations-list',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, DatePipe],
    templateUrl: './conversations.component.html',
    styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {
    conversations: Conversation[] = [];
    errors: { [key: string]: string } = {};

    constructor(private conversationService: ConversationService) {}

    ngOnInit(): void {
        this.loadConversations();
    }

    loadConversations(): void {
        this.conversationService.getAll().subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.conversations = response.data['conversations'];
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

    deleteConversation(id: number): void {
        this.conversationService.deleteById(id).subscribe({
            next: (response: ApiResponse) => {
                if (response && response.successful) {
                    this.loadConversations();
                    AlertUtil.success(response);
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
