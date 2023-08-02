import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payments } from '../Payments';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  payments: Payments[] = [];
  private subscription: Subscription | undefined;

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.getAllPayments();
  }

  private getAllPayments() {
    this.subscription = this.paymentService.getAllPayments().subscribe({
      next: (data: Payments[]) => {
        this.payments = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
