import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  constructor(
    public alertController: AlertController
  ) {}

  ngOnInit() {
    // this.presentAlert( 1, '$300.000');
  }


    async presentAlert( state:number, value:string  ) {
      let txtNoAproved = 'No ha sido posible aprobar tu crédito, puedes solicitar un valor diferente e Intentar de nuevo.';
      let txtAproved = `Tu crédito por ${value} ha sido aprobado. Pronto nos comunicaremos contigo para mas detalles.`;
      let txtMessage = state == 0 ? 'Lo sentimos' : '¡Felicidades!';
      let txtShow = state == 0 ? txtNoAproved : txtAproved;
      const alert = await this.alertController.create({
        // header: 'Confirm!',
        // subHeader: 'Subtitle', 
        message: `
          <div class="containerAlert containerAlert--congratulation">
            <ion-img src="../../../assets/images/alert/aproved.jpg"></ion-img>
            <div class="containerAlert__message">
              <ion-text>
                <h4>${txtMessage}</h4>
              </ion-text>
              <ion-text> ${txtShow} </ion-text>
            </div>
          </div>
        `,
        buttons: [
          // {
          //   text: 'Cancel',
          //   role: 'cancel',
          //   cssClass: 'secondary',
          //   handler: (blah) => {
          //     console.log('Confirm Cancel: blah');
          //   }
          // },
          {
            text: 'ENTENDIDO',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });

    await alert.present();
  }

}
