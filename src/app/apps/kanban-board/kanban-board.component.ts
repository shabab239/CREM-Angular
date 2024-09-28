import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-kanban-board',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass],
    templateUrl: './kanban-board.component.html',
    styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent {

    // To Do
    toDo : any = [
        {
            title: `Project Requirements`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `5 days left`,
            bgClass: `bg-purple-100`,
            users: [
                {
                    img: `images/users/user6.jpg`
                },
                {
                    img: `images/users/user7.jpg`
                },
                {
                    img: `images/users/user8.jpg`
                }
            ]
        },
        {
            title: `WordPress Theme`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `7 days left`,
            bgClass: `bg-secondary-100`,
            users: [
                {
                    img: `images/users/user9.jpg`
                },
                {
                    img: `images/users/user10.jpg`
                }
            ]
        },
        {
            title: `UX/UI Design`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `10 days left`,
            bgClass: `bg-success-100`,
            users: [
                {
                    img: `images/users/user11.jpg`
                },
                {
                    img: `images/users/user12.jpg`
                },
                {
                    img: `images/users/user13.jpg`
                }
            ]
        },
        {
            title: `Project Analysis`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `14 days left`,
            bgClass: `bg-orange-100`,
            users: [
                {
                    img: `images/users/user14.jpg`
                },
                {
                    img: `images/users/user15.jpg`
                }
            ]
        },
        {
            title: `Competitor Research `,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `15 days left`,
            bgClass: `bg-primary-100`,
            users: [
                {
                    img: `images/users/user16.jpg`
                },
                {
                    img: `images/users/user17.jpg`
                }
            ]
        }
    ];

    // Doing
    doing : any = [
        {
            title: `React Template`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `3 days left`,
            bgClass: `bg-orange-100`,
            users: [
                {
                    img: `images/users/user18.jpg`
                },
                {
                    img: `images/users/user19.jpg`
                }
            ]
        },
        {
            title: `Laravel Project`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `5 days left`,
            bgClass: `bg-purple-100`,
            users: [
                {
                    img: `images/users/user20.jpg`
                },
                {
                    img: `images/users/user21.jpg`
                },
                {
                    img: `images/users/user22.jpg`
                }
            ]
        },
        {
            title: `Project Requirements`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `7 days left`,
            bgClass: `bg-danger-100`,
            users: [
                {
                    img: `images/users/user23.jpg`
                }
            ]
        },
        {
            title: `UX/UI Design`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `9 days left`,
            bgClass: `bg-success-100`,
            users: [
                {
                    img: `images/users/user24.jpg`
                },
                {
                    img: `images/users/user25.jpg`
                }
            ]
        }
    ];

    // Done
    done : any = [
        {
            title: `Admin Template`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `3 days left`,
            bgClass: `bg-primary-100`,
            users: [
                {
                    img: `images/users/user26.jpg`
                },
                {
                    img: `images/users/user27.jpg`
                },
                {
                    img: `images/users/user28.jpg`
                }
            ]
        },
        {
            title: `eCommerce Template`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `7 days left`,
            bgClass: `bg-purple-100`,
            users: [
                {
                    img: `images/users/user29.jpg`
                },
                {
                    img: `images/users/user30.jpg`
                }
            ]
        },
        {
            title: `Shopify Theme`,
            description: `A brief description of the project, its objectives, and its importance to the organization.`,
            daysLeft: `10 days left`,
            bgClass: `bg-success-100`,
            users: [
                {
                    img: `images/users/user11.jpg`
                },
                {
                    img: `images/users/user12.jpg`
                },
                {
                    img: `images/users/user13.jpg`
                }
            ]
        }
    ];

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

}