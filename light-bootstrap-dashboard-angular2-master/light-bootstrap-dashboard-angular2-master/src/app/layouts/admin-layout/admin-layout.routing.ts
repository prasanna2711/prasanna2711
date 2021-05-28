import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ServerStatusComponent } from 'app/server-status/server-status.component';
import { TestServerComponent } from 'app/test-server/test-server.component';
import { LiveServerComponent } from 'app/live-server/live-server.component';
import { BaseLineLiveServerComponent } from 'app/base-line-live-server/base-line-live-server.component';
import { BaseLineTestServerComponent } from 'app/base-line-test-server/base-line-test-server.component';
import { DailyDataComponent } from 'app/daily-data/daily-data.component';
import { DashboardCardsComponent } from 'app/dashboard-cards/dashboard-cards.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'serverStatus',  component: ServerStatusComponent },
    { path: 'testServer',  component: TestServerComponent },
    { path: 'liveServer',  component: LiveServerComponent },
    { path: 'baseLineTestServer',  component: BaseLineTestServerComponent },
    { path: 'baseLineLiveServer',  component: BaseLineLiveServerComponent },
    { path: 'dailyData',  component: DailyDataComponent },
    { path: 'dashboardCards',  component: DashboardCardsComponent },

    

];
