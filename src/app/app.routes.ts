import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TasksComponent} from './construction/to-do-list/tasks.component';
import {EcommercePageComponent} from './pages/ecommerce-page/ecommerce-page.component';
import {EProductsGridComponent} from './pages/ecommerce-page/e-products-grid/e-products-grid.component';
import {EProductsListComponent} from './pages/ecommerce-page/e-products-list/e-products-list.component';
import {EProductDetailsComponent} from './pages/ecommerce-page/e-product-details/e-product-details.component';
import {ECreateProductComponent} from './pages/ecommerce-page/e-create-product/e-create-product.component';
import {EEditProductComponent} from './pages/ecommerce-page/e-edit-product/e-edit-product.component';
import {ECartComponent} from './pages/ecommerce-page/e-cart/e-cart.component';
import {ECheckoutComponent} from './pages/ecommerce-page/e-checkout/e-checkout.component';
import {EOrdersComponent} from './pages/ecommerce-page/e-orders/e-orders.component';
import {EOrderDetailsComponent} from './pages/ecommerce-page/e-order-details/e-order-details.component';
import {ECreateOrderComponent} from './pages/ecommerce-page/e-create-order/e-create-order.component';
import {EOrderTrackingComponent} from './pages/ecommerce-page/e-order-tracking/e-order-tracking.component';
import {ECustomersComponent} from './pages/ecommerce-page/e-customers/e-customers.component';
import {ECustomerDetailsComponent} from './pages/ecommerce-page/e-customer-details/e-customer-details.component';
import {ECategoriesComponent} from './pages/ecommerce-page/e-categories/e-categories.component';
import {ESellersComponent} from './pages/ecommerce-page/e-sellers/e-sellers.component';
import {ESellerDetailsComponent} from './pages/ecommerce-page/e-seller-details/e-seller-details.component';
import {ECreateSellerComponent} from './pages/ecommerce-page/e-create-seller/e-create-seller.component';
import {EReviewsComponent} from './pages/ecommerce-page/e-reviews/e-reviews.component';
import {ERefundsComponent} from './pages/ecommerce-page/e-refunds/e-refunds.component';
import {ProjectManagementPageComponent} from './construction/project/project-management-page.component';
import {ProjectsComponent} from './construction/project/projects/projects.component';
import {ProjectFormComponent} from './construction/project/project-form/project-form.component';
import {StagesComponent} from './construction/stage/stages/stages.component';
import {UsersComponent} from './hr/users/users.component';
import {LmsPageComponent} from './pages/lms-page/lms-page.component';
import {LCoursesComponent} from './pages/lms-page/l-courses/l-courses.component';
import {LCourseDetailsComponent} from './pages/lms-page/l-course-details/l-course-details.component';
import {LLessonPreviewComponent} from './pages/lms-page/l-lesson-preview/l-lesson-preview.component';
import {LCreateCourseComponent} from './pages/lms-page/l-create-course/l-create-course.component';
import {LEditCourseComponent} from './pages/lms-page/l-edit-course/l-edit-course.component';
import {LInstructorsComponent} from './pages/lms-page/l-instructors/l-instructors.component';
import {HelpdeskPageComponent} from './pages/helpdesk-page/helpdesk-page.component';
import {HdTicketsComponent} from './pages/helpdesk-page/hd-tickets/hd-tickets.component';
import {HdTicketDetailsComponent} from './pages/helpdesk-page/hd-ticket-details/hd-ticket-details.component';
import {HdAgentsComponent} from './pages/helpdesk-page/hd-agents/hd-agents.component';
import {HdReportsComponent} from './pages/helpdesk-page/hd-reports/hd-reports.component';
import {EventsPageComponent} from './pages/events-page/events-page.component';
import {EventsGridComponent} from './pages/events-page/events-grid/events-grid.component';
import {EventsListComponent} from './pages/events-page/events-list/events-list.component';
import {EventDetailsComponent} from './pages/events-page/event-details/event-details.component';
import {CreateAnEventComponent} from './pages/events-page/create-an-event/create-an-event.component';
import {EditAnEventComponent} from './pages/events-page/edit-an-event/edit-an-event.component';
import {SocialPageComponent} from './pages/social-page/social-page.component';
import {ProfileComponent} from './pages/social-page/profile/profile.component';
import {TimelineComponent} from './pages/social-page/profile/timeline/timeline.component';
import {AboutComponent} from './pages/social-page/profile/about/about.component';
import {ActivityComponent} from './pages/social-page/profile/activity/activity.component';
import {ProfileSettingsComponent} from './pages/social-page/profile-settings/profile-settings.component';
import {InvoicesPageComponent} from './pages/invoices-page/invoices-page.component';
import {InvoicesComponent} from './pages/invoices-page/invoices/invoices.component';
import {InvoiceDetailsComponent} from './pages/invoices-page/invoice-details/invoice-details.component';
import {CreateInvoiceComponent} from './pages/invoices-page/create-invoice/create-invoice.component';
import {EditInvoiceComponent} from './pages/invoices-page/edit-invoice/edit-invoice.component';
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {TeamMembersComponent} from './pages/users-page/team-members/team-members.component';
import {UsersListComponent} from './pages/users-page/users-list/users-list.component';
import {AddUserComponent} from './pages/users-page/add-user/add-user.component';
import {StarterComponent} from './starter/starter.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {PUserProfileComponent} from './pages/profile-page/p-user-profile/p-user-profile.component';
import {PTeamsComponent} from './pages/profile-page/p-teams/p-teams.component';
import {PProjectsComponent} from './pages/profile-page/p-projects/p-projects.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SignInComponent} from './authentication/sign-in/sign-in.component';
import {SignUpComponent} from './authentication/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './authentication/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './authentication/reset-password/reset-password.component';
import {ConfirmEmailComponent} from './authentication/confirm-email/confirm-email.component';
import {LockScreenComponent} from './authentication/lock-screen/lock-screen.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {InternalErrorComponent} from './common/internal-error/internal-error.component';
import {MapsPageComponent} from './pages/maps-page/maps-page.component';
import {NotificationsPageComponent} from './pages/notifications-page/notifications-page.component';
import {MembersPageComponent} from './pages/members-page/members-page.component';
import {GalleryPageComponent} from './pages/gallery-page/gallery-page.component';
import {TestimonialsPageComponent} from './pages/testimonials-page/testimonials-page.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {ComingSoonComponent} from './coming-soon/coming-soon.component';
import {BlankPageComponent} from './pages/blank-page/blank-page.component';
import {PricingPageComponent} from './pages/pricing-page/pricing-page.component';
import {TimelinePageComponent} from './pages/timeline-page/timeline-page.component';
import {FaqPageComponent} from './pages/faq-page/faq-page.component';
import {FrontPagesComponent} from './front-pages/front-pages.component';
import {HomeComponent} from './front-pages/home/home.component';
import {AuthGuard} from "./authentication/auth.guard";
import {BuildingsComponent} from "./construction/building/buildings/buildings.component";
import {BuildingFormComponent} from "./construction/building/building-form/building-form.component";
import {FloorFormComponent} from "./construction/floor/floor-form/floor-form.component";
import {FloorsComponent} from "./construction/floor/floors/floors.component";
import {UnitsComponent} from "./construction/unit/units/units.component";
import {UnitFormComponent} from "./construction/unit/unit-form/unit-form.component";
import {WorkersComponent} from "./construction/worker/workers/workers.component";
import {WorkerFormComponent} from "./construction/worker/worker-form/worker-form.component";
import {WorkerAttendanceComponent} from "./construction/worker/worker-attendance/worker-attendance.component";
import {BookingViewComponent} from "./construction/unit/booking-view/booking-view.component";
import {TransactionsComponent} from "./accounting/transactions/transactions.component";
import {AccountsComponent} from "./accounting/accounts/accounts.component";
import {LedgerHeadsComponent} from "./accounting/ledger-heads/ledger-heads.component";
import {CampaignsComponent} from "./marketing/campaigns/campaigns.component";
import {ConversationsComponent} from "./marketing/conversations/conversations.component";
import {LeadFormComponent} from "./marketing/lead-form/lead-form.component";
import {CampaignFormComponent} from "./marketing/campaign-form/campaign-form.component";
import {ConversationFormComponent} from "./marketing/conversation-form/conversation-form.component";
import {MarketingComponent} from "./marketing/marketing.component";
import {CustomersComponent} from "./marketing/customers/customers.component";
import {LeadsComponent} from "./marketing/leads/leads.component";
import {MarketplaceComponent} from "./marketing/marketplace/marketplace.component";
import {BrowseUnitsComponent} from "./marketing/browse-units/browse-units.component";
import {AdminComponent} from "./dashboard/admin/admin.component";
import {ManagerComponent} from "./dashboard/manager/manager.component";
import {AllStagesComponent} from "./construction/stage/all-stages/all-stages.component";
import {RawMaterialsComponent} from "./construction/raw-material/raw-materials/raw-materials.component";
import {RawMaterialFormComponent} from "./construction/raw-material/raw-material-form/raw-material-form.component";
import {
    RawMaterialSuppliersComponent
} from "./construction/raw-material/raw-material-suppliers/raw-material-suppliers.component";
import {
    RawMaterialOrdersComponent
} from "./construction/raw-material/raw-material-orders/raw-material-orders.component";
import {RawMaterialUsageComponent} from "./construction/raw-material/raw-material-usage/raw-material-usage.component";

export const routes: Routes = [
    {
        path: '',
        component: FrontPagesComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'marketplace', component: MarketplaceComponent},
            {path: 'marketplace/browse-units/:buildingId', component: BrowseUnitsComponent},
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: AdminComponent},
            {path: 'manager', component: ManagerComponent},
            {
                path: 'ecommerce-page',
                component: EcommercePageComponent,
                children: [
                    {path: '', component: EProductsGridComponent},
                    {path: 'products-list', component: EProductsListComponent},
                    {path: 'product-details', component: EProductDetailsComponent},
                    {path: 'create-product', component: ECreateProductComponent},
                    {path: 'edit-product', component: EEditProductComponent},
                    {path: 'orders', component: EOrdersComponent},
                    {path: 'order-details', component: EOrderDetailsComponent},
                    {path: 'create-order', component: ECreateOrderComponent},
                    {path: 'order-tracking', component: EOrderTrackingComponent},
                    {path: 'customers', component: ECustomersComponent},
                    {path: 'customer-details', component: ECustomerDetailsComponent},
                    {path: 'cart', component: ECartComponent},
                    {path: 'checkout', component: ECheckoutComponent},
                    {path: 'sellers', component: ESellersComponent},
                    {path: 'seller-details', component: ESellerDetailsComponent},
                    {path: 'create-seller', component: ECreateSellerComponent},
                    {path: 'categories', component: ECategoriesComponent},
                    {path: 'reviews', component: EReviewsComponent},
                    {path: 'refunds', component: ERefundsComponent}
                ]
            },
            {
                path: 'marketing',
                component: MarketingComponent,
                children: [
                    {path: 'customers', component: CustomersComponent},
                    {path: 'leads', component: LeadsComponent},
                    {path: 'lead-form', component: LeadFormComponent},
                    {path: 'campaigns', component: CampaignsComponent},
                    {path: 'campaign-form', component: CampaignFormComponent},
                    {path: 'conversations', component: ConversationsComponent},
                    {path: 'conversation-form', component: ConversationFormComponent},
                ]
            },
            {
                path: 'project',
                component: ProjectManagementPageComponent,
                children: [
                    {path: 'projects', component: ProjectsComponent},
                    {path: 'project-form', component: ProjectFormComponent},
                    {path: 'project-form/:id', component: ProjectFormComponent},
                    {path: 'buildings', component: BuildingsComponent},
                    {path: 'building-form', component: BuildingFormComponent},
                    {path: 'building-form/:id', component: BuildingFormComponent},
                    {path: 'floors', component: FloorsComponent},
                    {path: 'floor-form', component: FloorFormComponent},
                    {path: 'floor-form/:id', component: FloorFormComponent},
                    {path: 'units', component: UnitsComponent},
                    {path: 'unit-form', component: UnitFormComponent},
                    {path: 'unit-form/:id', component: UnitFormComponent},
                    {path: 'all-stages', component: AllStagesComponent},
                    {path: 'stages/:stageOf/:stageOfId', component: StagesComponent},
                    {path: 'tasks/:stageId', component: TasksComponent},
                    {path: 'users', component: UsersComponent},
                ]
            },
            {path: 'workers', component: WorkersComponent,},
            {path: 'worker-form', component: WorkerFormComponent,},
            {path: 'worker-form/:id', component: WorkerFormComponent,},
            {path: 'worker-attendance/:stageOf/:stageOfId/:stageId', component: WorkerAttendanceComponent,},
            {path: 'raw-materials', component: RawMaterialsComponent,},
            {path: 'raw-material-form', component: RawMaterialFormComponent,},
            {path: 'raw-material-form/:id', component: RawMaterialFormComponent,},
            {path: 'raw-material-suppliers', component: RawMaterialSuppliersComponent,},
            {path: 'raw-material-orders', component: RawMaterialOrdersComponent,},
            {path: 'raw-material-usage/:stageId', component: RawMaterialUsageComponent,},
            {path: 'booking-view/:unitId', component: BookingViewComponent,},
            {path: 'transactions', component: TransactionsComponent,},
            {path: 'accounts', component: AccountsComponent,},
            {path: 'ledger', component: LedgerHeadsComponent,},
            {path: 'ledger-heads', component: LedgerHeadsComponent,},
            {
                path: 'lms-page',
                component: LmsPageComponent,
                children: [
                    {path: '', component: LCoursesComponent},
                    {path: 'course-details', component: LCourseDetailsComponent},
                    {path: 'create-course', component: LCreateCourseComponent},
                    {path: 'edit-course', component: LEditCourseComponent},
                    {path: 'instructors', component: LInstructorsComponent},
                    {path: 'lesson-preview', component: LLessonPreviewComponent}
                ]
            },
            {
                path: 'helpdesk-page',
                component: HelpdeskPageComponent,
                children: [
                    {path: '', component: HdTicketsComponent},
                    {path: 'ticket-details', component: HdTicketDetailsComponent},
                    {path: 'agents', component: HdAgentsComponent},
                    {path: 'reports', component: HdReportsComponent}
                ]
            },
            {
                path: 'events',
                component: EventsPageComponent,
                children: [
                    {path: '', component: EventsGridComponent},
                    {path: 'events-list', component: EventsListComponent},
                    {path: 'event-details', component: EventDetailsComponent},
                    {path: 'create-an-event', component: CreateAnEventComponent},
                    {path: 'edit-an-event', component: EditAnEventComponent}
                ]
            },
            {
                path: 'social',
                component: SocialPageComponent,
                children: [
                    {
                        path: '',
                        component: ProfileComponent,
                        children: [
                            {path: '', component: TimelineComponent},
                            {path: 'about', component: AboutComponent},
                            {path: 'activity', component: ActivityComponent}
                        ]
                    },
                    {path: 'settings', component: ProfileSettingsComponent}
                ]
            },
            {
                path: 'invoices',
                component: InvoicesPageComponent,
                children: [
                    {path: '', component: InvoicesComponent},
                    {path: 'invoice-details', component: InvoiceDetailsComponent},
                    {path: 'create-invoice', component: CreateInvoiceComponent},
                    {path: 'edit-invoice', component: EditInvoiceComponent}
                ]
            },
            {
                path: 'users',
                component: UsersPageComponent,
                children: [
                    {path: '', component: UsersComponent},
                    {path: 'users-list', component: UsersListComponent},
                    {path: 'add-user', component: AddUserComponent}
                ]
            },
            {
                path: 'profile',
                component: ProfilePageComponent,
                children: [
                    {path: '', component: PUserProfileComponent},
                    {path: 'teams', component: PTeamsComponent},
                    {path: 'projects', component: PProjectsComponent}
                ]
            },
            {path: 'starter', component: StarterComponent},
            {path: 'timeline', component: TimelinePageComponent},
            {path: 'pricing', component: PricingPageComponent},
            {path: 'faq', component: FaqPageComponent},
            {path: 'gallery', component: GalleryPageComponent},
            {path: 'testimonials', component: TestimonialsPageComponent},
            {path: 'search', component: SearchPageComponent},
            {path: 'blank-page', component: BlankPageComponent},
            {path: 'internal-error', component: InternalErrorComponent},
            {path: 'maps', component: MapsPageComponent},
            {path: 'notifications', component: NotificationsPageComponent},
            {path: 'members', component: MembersPageComponent},
        ]
    },
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent},
            {path: 'reset-password', component: ResetPasswordComponent},
            {path: 'confirm-email', component: ConfirmEmailComponent},
            {path: 'lock-screen', component: LockScreenComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    },
    {path: 'coming-soon', component: ComingSoonComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];
