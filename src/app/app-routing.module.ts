import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

const routes: Routes = [
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'createContact', component: CreateContactComponent },
  { path: '', component: ContactListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
