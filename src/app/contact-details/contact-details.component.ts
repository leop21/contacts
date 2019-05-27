import { Component, OnInit } from '@angular/core';
import { Contact } from '../core/models/contact.interface';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../core/services/contact-service.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contactDetail: Contact;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) {}
  
  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const contactId = params.get('id');
          return this.contactsService
            .getContact(contactId);
        })
      )
      .subscribe(contact => (this.contactDetail = contact));
  }

  onDeleteClick() {
    this.contactsService.deleteContact(this.contactDetail.id).subscribe( info => {
      console.log(info);
      this.router.navigate(['']);
    });
  }

}
