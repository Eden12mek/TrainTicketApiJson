import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { MasterView1Component } from './master-view1/master-view1.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', component: MasterViewComponent, data: { text: 'Master View' } },
  { path: 'master-view1', component: MasterView1Component, data: { text: 'Master View 1' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
