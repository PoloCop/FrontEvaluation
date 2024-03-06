import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EventListComponent } from './event/event-list/event-list.component';

export const routes: Routes = [
  { path: '', component: EventListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [];
