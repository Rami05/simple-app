import { FormGroup, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NbBadgeModule, NbCardModule, NbInputModule, NbMenuModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RbsDashboaedComponent } from './rbs-dashboaed/rbs-dashboaed.component';
import { RbsLoginComponent } from './rbs-login/rbs-login.component';
import { RbsCarouselComponent } from './rbs-login/rbs-carousel/rbs-carousel.component';
import { RbsFormComponent } from './rbs-login/rbs-form/rbs-form.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GenderChartComponent } from './rbs-dashboaed/gender-chart/gender-chart.component';
import { StatusChartComponent } from './rbs-dashboaed/status-chart/status-chart.component';
import { TableUserComponent } from './rbs-dashboaed/table-user/table-user.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RbsHeaderComponent } from './rbs-dashboaed/rbs-header/rbs-header.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbInputModule,
    NbBadgeModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,FormsModule,NbUserModule

  ],
  declarations: [
    PagesComponent,
    RbsDashboaedComponent,
    RbsLoginComponent,
    RbsCarouselComponent,
    RbsFormComponent,
    GenderChartComponent,
    StatusChartComponent,
    TableUserComponent,
    RbsHeaderComponent,
  ],
})
export class PagesModule {
}
