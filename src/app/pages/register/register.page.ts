import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/firebase/authentication.service';
import { NavController } from '@ionic/angular';

// ↓↓↓↓ Apollo ↓↓↓↓
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const createUser = gql`
  mutation($idFirebase: String! , $mailFirebase: String! ){
    createUser(
      idFirebase: $idFirebase,
      email: $mailFirebase
    ){
      id,
      updatedAt,
      createdAt,
    }
  }
`;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private apollo: Apollo
  ) {}


  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
   'email': [
     { type: 'required', message: 'Contraseña requerida.' },
     { type: 'pattern', message: 'Ingresa el correo.' }
   ],
   'password': [
     { type: 'required', message: 'Contraseña requerida.' },
     { type: 'minlength', message: 'La contraseña debe tener minimo 5 caracteres' }
   ],
   'confirmPassword': [
    { type: 'required', message: 'Contraseña requerida.' },
    { type: 'equal', message: 'No conciden las contraseñas.' }
  ]
 };

  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.pattern(/^[a-z0-9_-]{6,18}$/),
        Validators.required
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        
      ])),
    });

  }

  tryRegister(value){
    this.authService.registerUser(value)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.successMessage = "Tu cuenta ha sido creada, ya puedes ingresar.";
       this.createUser(res.user.uid , res.user.email);

     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
  }

  goLoginPage(){
    this.navCtrl.navigateBack('/home');
  }

  createUser(firebaseId:string, firebaseMail:string) {
    this.apollo.mutate({
      mutation: createUser,
      variables: {
        idFirebase: firebaseId,
        mailFirebase: firebaseMail,
      }
    }).subscribe( ({data}) =>{
      console.log(data);
    },(error) =>{
      console.log(error);
    });
  }

}
