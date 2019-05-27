import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../core/models/contact.interface';
import { ContactsService } from '../core/services/contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input()
  contact: Contact;
  @Output() deleted = new EventEmitter();

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.contactsService.deleteContact(this.contact.id).subscribe( info => {
      console.log(info);
      this.deleted.emit();
    });
  }

}
