import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { AuthenticationService } from '../../services/firebase/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  constructor(
    public alertController: AlertController,
    private apollo: Apollo,
    private navCtrl: NavController,
  ) {}


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

  rates: any;
  loading = true;
  error: any;

  pushUserNavCtrl() {
    // this.navCtrl.navigateForward(`/user/${ this.valor }`);
    this.navCtrl.navigateForward(`/mapa`);
  }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
            {
              User(
                id : "cjx7szta0099s0176ihmzw9f5"
              ){
                name
                addresses{
                  addressDetail1
                  addressDetail2
                  address
                }
              }
            }
        `,
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.rates = result.data && result.data.User;
        this.loading = result.loading;
        this.error = result.errors;
        console.log( this.rates );
      });
  }

}
