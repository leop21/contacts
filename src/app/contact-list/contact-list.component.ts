import { Component, OnInit } from '@angular/core';
import { Contact, Contacts } from '../core/models/contact.interface';
import { ContactsService } from '../core/services/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }
  contacts: Contacts;

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactsService.getContacts().subscribe( info => {
      this.contacts = info;
      //console.log(this.contacts);
    });
  }

}
