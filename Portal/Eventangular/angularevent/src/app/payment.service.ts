import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payments } from './Payments';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
    private apiURL = "http://localhost:8080/api/payments/";
  

  constructor(private http: HttpClient) { }

  getAllPayments(): Observable<Payments[]> {
    return this.http.get<Payments[]>(this.apiURL);
  }

  processPayment(payment: Payments): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/process`, payment);
  }
 

  // getPaymentById(id: number): Observable<Payments> {
  //   return this.http.get<Payments>(`${this.apiUrl}get/${id}`);
  // }

  // addPayment(payment: Payments): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}addpayment`, payment);
  // }

  // updatePayment(id: number, payment: Payments): Observable<Payments> {
  //   return this.http.put<Payments>(`${this.apiUrl}updatepayment/${id}`, payment);
  // }

  // deletePayment(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}deletepayment/${id}`);
  }

