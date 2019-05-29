import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormBorrowerPage } from './form-borrower.page';

const routes: Routes = [
  {
    path: '',
    component: FormBorrowerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormBorrowerPage]
})
export class FormBorrowerPageModule {}
