import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/firebase/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


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

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

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
       this.successMessage = "Your account has been created. Please log in.";
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
  }

  goLoginPage(){
    this.navCtrl.navigateBack('/home');
  }

}
