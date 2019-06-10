import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // rates: any[];
  // loading = true;
  // error: any;

  // constructor(
  //   private apollo: Apollo,
  //   private navCtrl: NavController
  // ) { }
  // pushUserNavCtrl() {
  //   // this.navCtrl.navigateForward(`/user/${ this.valor }`);
  //   this.navCtrl.navigateForward(`/mapa`);
  // }

  // ngOnInit() {
  //   this.apollo
  //     .watchQuery({
  //       query: gql`
  //         {
  //            allUsers{
  //             name
  //             id
  //             } 
  //         }
  //       `,
  //     })
  //     .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
  //       this.rates = result.data && result.data.allUsers;
  //       this.loading = result.loading;
  //       this.error = result.errors;
  //     });
  // }
  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(

    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }


  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
 

  loginUser(value){
    this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.navCtrl.navigateForward('/initial');

    }, err => {
      this.errorMessage = err.message;
    })
  }

  goToRegisterPage(){
    this.navCtrl.navigateForward('/register');
  }
}
