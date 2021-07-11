import { RbsLoginComponent } from './rbs-login/rbs-login.component';
import { RbsDashboaedComponent } from './rbs-dashboaed/rbs-dashboaed.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: RbsDashboaedComponent,
    },
    
    {
      path: 'login',
      component: RbsLoginComponent,
    },
    
    
   
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: RbsDashboaedComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
