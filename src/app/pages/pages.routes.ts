import { RouterModule, Routes } from '@angular/router';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RXJS' } },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progreso' } },
      { path: 'promises', component: PromisesComponent, data: { title: 'Promesas' } },
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'graficas1', component: Graficas1Component, data: { title: 'Gráficas' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes de la Cuenta' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
