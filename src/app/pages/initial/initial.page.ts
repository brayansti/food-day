import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { NavController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})

export class InitialPage implements OnInit {
  userEmail: string;

  constructor(
    public alertController: AlertController,
    private navCtrl: NavController,
    private authService: AuthenticationService
    ) {

  }
  ngOnInit() {
    // this.presentAlert()
    // if (this.authService.userDetails()) {
    //   this.userEmail = this.authService.userDetails().email;
    // } else {
    //   this.navCtrl.navigateBack('/home');
    // }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: 'Seleciona el rol que se ajuste a tus intereses.',
      buttons: ['LISTO'],
      cssClass: 'alertDanger'
    });

    await alert.present();
  }

    logout() {
      this.authService.logoutUser()
        .then(res => { 
          console.log(res);
          this.navCtrl.navigateBack('');
        })
        .catch(error => {
          console.log(error);
        })
    }

}
