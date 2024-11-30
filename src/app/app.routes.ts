import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TasksComponent} from './construction/to-do-list/tasks.component';
import {ProjectManagementPageComponent} from './construction/project/project-management-page.component';
import {ProjectsComponent} from './construction/project/projects/projects.component';
import {ProjectFormComponent} from './construction/project/project-form/project-form.component';
import {StagesComponent} from './construction/stage/stages/stages.component';
import {UsersComponent} from './hr/users/users.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SignInComponent} from './authentication/sign-in/sign-in.component';
import {SignUpComponent} from './authentication/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './authentication/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './authentication/reset-password/reset-password.component';
import {ConfirmEmailComponent} from './authentication/confirm-email/confirm-email.component';
import {LockScreenComponent} from './authentication/lock-screen/lock-screen.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {NotFoundComponent} from './not-found/not-found.component';
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
import {IncomeStatementComponent} from "./accounting/income-statement/income-statement.component";
import {CashFlowComponent} from "./accounting/cash-flow/cash-flow.component";

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
                path: 'marketing',
                component: MarketingComponent,
                children: [
                    {path: 'customers', component: CustomersComponent},
                    {path: 'leads', component: LeadsComponent},
                    {path: 'lead-form', component: LeadFormComponent},
                    {path: 'campaigns', component: CampaignsComponent},
                    {path: 'campaign-form', component: CampaignFormComponent},
                    {path: 'conversations/:id', component: ConversationsComponent},
                    {path: 'conversation-form/:id', component: ConversationFormComponent},
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
            {path: 'income-statement', component: IncomeStatementComponent,},
            {path: 'cash-flow', component: CashFlowComponent,},
            {path: 'users', component: UsersComponent,},
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

    {path: '**', component: NotFoundComponent}
];
