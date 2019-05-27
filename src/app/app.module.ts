import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactsService } from './core/services/contact-service.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { FirstUpperCaseLetterPipe } from './core/pipes/first-upper-case-letter.pipe';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    MainComponent,
    FirstUpperCaseLetterPipe,
    ContactDetailsComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
