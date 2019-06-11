import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})

export class InitialPage implements OnInit {

  constructor(public alertController: AlertController) {

  }
  ngOnInit() {
    this.presentAlert()
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

}
