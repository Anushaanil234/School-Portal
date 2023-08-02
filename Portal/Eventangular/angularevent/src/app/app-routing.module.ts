import { NgModule } from '@angular/core';
import {  Routes, RouterModule} from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import {SortEventComponent} from './sort-event/sort-event.component';
import { StudentEventComponent } from './student-event/student-event.component';
import { RegistrationComponent } from './registration-event/register-event.component';
import {RegisterListComponent} from './register-list/register-list.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentSuccessComponent } from './payment-event/payment-event.component';
import { PaymentErrorComponent } from './payment-event/payment-error.component';

const routes: Routes = [
   {path: 'events', component: EventListComponent},
  {path: 'create-event', component: CreateEventComponent},
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  {path: 'update-event/:id', component: UpdateEventComponent},
  {path: 'delete-event/:id', component: EventListComponent},
  {path: 'event-details/:id', component: EventDetailsComponent},
  {path: 'sort-event',component:SortEventComponent},
  
  {path: 'events/delete-event,id', component: EventListComponent},
  {path: 'register-event',component:RegistrationComponent},
  {path: 'events/create-event', component: CreateEventComponent},
  {path: 'update-event,id', component: EventListComponent},
  {path: 'events/sort-event', component:SortEventComponent},
  {path:'events/student-events',component:StudentEventComponent},
  {path:'events/register-list',component:RegisterListComponent},
  {path:'event-details,id',component:EventDetailsComponent},
  {path:'events/payment-details',component:PaymentListComponent},
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'payment-error', component: PaymentErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }