import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from '../event.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-registration',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})


export class RegistrationComponent {
  [x: string]: any;
  router: any;
  //eventService: any;

  registrationForm: FormGroup;
  name: AbstractControl;
  //class:AbstractControl;
  email: AbstractControl;
  phone: AbstractControl;
  event: AbstractControl;
  events = [
    { name: 'Coloring', amount: 20 },
    { name: 'EArth', amount: 45},
    { name: 'Colossous', amount: 80 },
  ];
  
  
  snackBar: any;
  paymentService: any;
  selectedEventAmount: any;
  //class: AbstractControl<any, any>;

  constructor(private fb: FormBuilder,private eventService:EventService) {
    this.registrationForm = fb.group({
      name: ['', Validators.required],
      //class: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      event: ['', Validators.required]
    });
    this.name = this.registrationForm.controls['name'];
   //this.class = this.registrationForm.controls['class'];
    this.email = this.registrationForm.controls['email'];
    this.phone = this.registrationForm.controls['phone'];
    this.event = this.registrationForm.controls['event'];
  }
  registrationData = {
    name:'',
   // class:'',
    email:'',
    phone:'',
    event:''
  };
 
   registrationSuccessful: boolean = false;
  formSubmitted: boolean = false;

  onSubmit(): void {
    this.formSubmitted = true;
    if (
      this.registrationData.name &&
      //this.registrationData.class &&
      this.registrationData.email &&
      this.registrationData.phone &&
      this.registrationData.event
    ) {
      this.eventService.registerEvent(this.registrationData).subscribe(
        (data: any) => {
         console.log(data);
      this.registrationSuccessful = true;
      alert('Registration successful!');
        });
    }
  }

  onEventSelection() {
    const selectedEvent = this.events.find(event => event.name === this.registrationData.event);
    this.selectedEventAmount = selectedEvent ? selectedEvent.amount : 0; // Assuming the event object has an 'amount' property
  }
  

  // makepayment() {
  //   this.paymentService.processPayment(this.payment).subscribe(
  //     (      response: any) => {
  //       console.log('Payment successful:', response);
  //       // Handle the success response here, e.g., show a success message
  //     },
  //     (      error: any) => {
  //       console.error('Payment failed:', error);
  //       // Handle the error response here, e.g., show an error message
  //     }
  //   );
  // }
  // payment(payment: any) {
  //   throw new Error('Method not implemented.');
  // }

  // pay(): void {
  //   // Perform any payment-related operations here
  //   // For example, you can pass the selectedEventAmount to the payment page

  //   // Navigate to the payment page
  //   this.router.navigate(['/payment'], { queryParams: { amount: this.selectedEventAmount } });
  // }
  goToPayment(): void {
    // Get the necessary payment details
    const name = this.registrationForm.value.name;
    const email = this.registrationForm.value.email;
    const phone = this.registrationForm.value.phone;
    const eventName = this.registrationForm.value.event;
    const eventAmount = this.selectedEventAmount;

    // Perform the payment operations here
    // For example, you can send a request to a payment gateway API

    
    // with the necessary payment details and handle the response

    // Simulating a successful payment response
    const paymentResponse = { transactionId: '123456789', status: 'success' };

    // Handle the payment response

    
    if (paymentResponse.status === 'success') {
      // Payment successful
      // Perform any necessary actions (e.g., update database, display success message)

      // Navigate to the success page
      this.router.navigateByUrl('/payment-success');
    } else {
      // Payment failed
      // Perform any necessary actions (e.g., display error message)

      // Navigate to the error page
      this.router.navigateByUrl('/payment-error ');
    }
  }

 
  
  
}

  
