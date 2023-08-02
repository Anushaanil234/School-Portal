import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { SortEventComponent } from './sort-event/sort-event.component';
import { StudentEventComponent } from './student-event/student-event.component';
//import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar'; // import MAT_SNACK_BAR_DEFAULT_OPTIONS here
import { RegistrationComponent } from './registration-event/register-event.component';
import { RegisterListComponent } from './register-list/register-list.component';
//import { PaymentComponent } from './payment-event/payment-event.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
//import { MatSnackBarModule } from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CreateEventComponent,
    UpdateEventComponent,
    EventDetailsComponent,
    SortEventComponent,
    StudentEventComponent,
    RegistrationComponent,
    RegisterListComponent,
    PaymentListComponent,
   // PaymentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, // Add ReactiveFormsModule
    HttpClientModule,
    //MatSnackBarModule
  ],
  providers: [

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
