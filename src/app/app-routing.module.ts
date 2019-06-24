import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
	{ path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
	{ path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },


	/*{ path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
	{ path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
	{ path: 'initial', loadChildren: './pages/initial/initial.module#InitialPageModule' },
	{ path: 'form-borrower', loadChildren: './pages/form-borrower/form-borrower.module#FormBorrowerPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  */


];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
