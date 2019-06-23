import { Component, OnInit , OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { Subscription } from 'rxjs';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { AuthenticationService } from '../../services/firebase/authentication.service';

import { Storage } from '@ionic/storage';

// const CurrentUserForProfile = gql`
//   query CurrentUserForProfile {
  //     User(
    //         idFirebase : "xHur4AhAlDMpK2if60hmbD4AqVn1"
    //       ){
      //         name
      //         addresses{
        //           addressDetail1
        //           addressDetail2
        //           address
        //         }
        //       }
        //     }
        //   }
        // `;
const CurrentUserForProfile = gql`
  query CurrentUserForProfile($idFirebase: String!) {
    User(
        idFirebase : $idFirebase
      )
    {
      name
    }
  }
`;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit, OnDestroy {
  currentUser: any;
  private querySubscription: Subscription;

  constructor(
    private storage: Storage,
    public alertController: AlertController,
    private apollo: Apollo,
    private navCtrl: NavController,
  ) {}

  firebaseId = "xHur4AhAlDMpK2if60hmbD4AqVn1";

  getUserById( firebaseId:string ){
    this.querySubscription = this.apollo
    .watchQuery({
      query: CurrentUserForProfile,
      variables: {
        idFirebase: firebaseId,
      },
    })
    .valueChanges.subscribe(({data}) => {
      this.currentUser = data;
      console.log(this.currentUser)
    });
  }

  ngOnInit() {
    this.storage.get('firebaseId').then((val) => {
      // console.log('firebaseId →→ Profile ' + val);
      this.getUserById(val)
    });

    this.storage.get('firebaseEmail').then( (val) =>{
      // console.log('firebaseEmail' + val);
    } )


    // ↓↓↓ Esto funciona ...!!! perro
    // this.querySubscription = this.apollo
    // .watchQuery({
    //   query: CurrentUserForProfile,
    //   variables: {
    //     idFirebase: this.firebaseId,
    //   },
    // })
    // .valueChanges.subscribe(({data}) => {
    //   this.currentUser = data;
    //   console.log(this.currentUser)
    // });
    // ↑↑↑ Esto funciona ...!!! perro

  // this.getUserData('1231231f23d123g1');
  }
  ngOnDestroy(){
    this.querySubscription.unsubscribe();
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

  rates: any;
  loading = true;
  error: any;

  pushUserNavCtrl() {
    // this.navCtrl.navigateForward(`/user/${ this.valor }`);
    this.navCtrl.navigateForward(`/mapa`);
  }
  // getUserData(firebaseID:String){

  // }
}
