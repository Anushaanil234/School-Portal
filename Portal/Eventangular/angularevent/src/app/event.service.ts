import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';
import { Event } from './event';
import { registrationData } from './registration';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseURL = "http://localhost:8080/api/events/";
  private creatURL="http://localhost:8080/api/addevent";
  private getidURL="http://localhost:8080/api/getbyid";
  private updateURL="http://localhost:8080/api/updateevent";
  private sortURL="http://localhost:8080/api/keyvalue/";
  private delURL="http://localhost:8080/api/deleteevent";
  private registerURL="http://localhost:8080/api/register-event";
  private registerlist="http://localhost:8080/api/eventlist";
  getEvents: any;
   
  
 constructor(private httpClient: HttpClient) { }

  getEventsList(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseURL}`);
  }

  getRegisterList(): Observable<registrationData[]>{
    return this.httpClient.get<registrationData[]>(`${this.registerlist}`);
  }

  createEvent(event: Event): Observable<Object>{
    return this.httpClient.post(`${this.creatURL}`, event);
  }

  getEventById(id: number): Observable<Event>{
    return this.httpClient.get<Event>(`${this.getidURL}/${id}`);
  }

  updateEvent(id: number, event: Event): Observable<Object>{
    return this.httpClient.put(`${this.updateURL}/${id}`, event);
  }

  deleteEvent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.delURL}/${id}`);
  }

  sortEvent(standard?: string, section?: string, usertype?: string): Observable<Map<string, Event[]>> {
    let params = new HttpParams();
    if (standard) {
      params = params.set('standard', standard);
    }
    if (section) {
      params = params.set('section', section);
    }
    if (usertype) {
      params = params.set('usertype', usertype);
    }

    const url = this.sortURL;
    return this.httpClient.get<Map<string, Event[]>>(url, { params });
  }

  
  // registerEvent(
  //   name: string,
  //   email: string,
  //   phone: string,
  //   eventName: string
  // ): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const registration = {
  //     name,
  //     email,
  //     phone,
  //     eventName
  //   };
  //   return this.httpClient.post<any>(this.registerURL, registration, {
  //     headers: headers
  //   });
  // }

  // private handleError(error: any) {
  //   console.error('An error occurred', error);
  //   return throwError(error.message || error);
  // }
  

  registerEvent(registration: any): Observable<any> {
    const url = `${this.registerURL}`;
    return this.httpClient.post(url, registration);
 }
  

 }
 export { Event };