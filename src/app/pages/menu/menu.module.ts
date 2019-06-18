import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
	    {
        path: 'initial',
        loadChildren: '../initial/initial.module#InitialPageModule' 
      },
    	{
        path: 'form-borrower',
        loadChildren: '../form-borrower/form-borrower.module#FormBorrowerPageModule'
       },
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule' 
      }
    ]
  },
  {
    path: '', 
    redirectTo: '/menu/initial'
  }
];

 
/*{ path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
	{ path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
	{ path: 'initial', loadChildren: './pages/initial/initial.module#InitialPageModule' },
	{ path: 'form-borrower', loadChildren: './pages/form-borrower/form-borrower.module#FormBorrowerPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
