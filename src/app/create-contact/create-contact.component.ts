import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ContactsService } from '../core/services/contact-service.service';
import { Contact } from '../core/models/contact.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5), , Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.minLength(3), , Validators.maxLength(10)]],
    id: ['', Validators.required],
    phone: [''],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private contactsService: ContactsService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    const newContact: Contact = this.contactForm.value;

    this.contactsService.postContact(newContact).subscribe( info => {
      this.router.navigate(['']);
    });

  }

}
