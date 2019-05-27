import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Contact, Contacts } from '../models/contact.interface';
import { ApiService } from './api/api.service';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private apiService: ApiService) {}

  private handleError(error: any): Observable<any> {
    return throwError(console.error('Some error occured', error));
  }

  getContacts(): Observable<Contacts> {
    return this.apiService
     // .get<Contacts>('./assets/contacts.json')
      .get<Contacts>('http://localhost:3000/contacts')
      .pipe(map(response => response, catchError(this.handleError)));
  }

  getContact(id: number | string): Observable<Contact> {
    return this.apiService
      .get<Contact>('http://localhost:3000/contacts/'+id)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  postContact(contact: Contact): Observable<Contact> {
    return this.apiService
      .post<Contact>('http://localhost:3000/contacts', contact)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  deleteContact(id: number | string): Observable<Contact> {
    return this.apiService
      .delete<Contact>('http://localhost:3000/contacts/'+id)
      .pipe(map(response => response, catchError(this.handleError)));
  }
}