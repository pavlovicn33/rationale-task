import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingsComponent } from './meetings/meetings.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ActionsComponent } from './actions/actions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'meetings',
    component: MeetingsComponent,
    pathMatch: 'full',
  },
  {
    path: 'items',
    component: ItemsComponent,
    pathMatch: 'full',
  },
  {
    path: 'actions',
    component: ActionsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
