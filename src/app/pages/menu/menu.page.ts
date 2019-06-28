import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from "@angular/router";
import { NavController } from '@ionic/angular';

import { AuthenticationService } from '../../services/firebase/authentication.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    // {
    //   title: 'Inicio',
    //   url: '/menu/initial',
    //   icon: 'home'
    // },
    {
      title: 'Perfil',
      url: '/menu/profile',
      icon: 'body'
    },
    {
      title: 'Solicitar crédito',
      url: '/menu/form-borrower',
      icon: 'clipboard'
    },
    {
      title: 'Solicitudes disponibles',
      url: '/menu/credit-request',
      icon: 'list'
    },
    // {
    //   title: 'Detalle',
    //   url: '/menu/credit-detail',
    //   icon: 'list'
    // },
    {
      title: 'Editar perfil',
      url: '/menu/form-profile',
      icon: 'person'
    }
  ];

  selectedPath = ''; 

  constructor(
    private storage: Storage,
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthenticationService,

  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
    
   }

  ngOnInit() {
    
  }

  logout() {
    this.storage.remove('graphId');
    this.storage.remove('firebaseId');
    this.storage.remove('firebaseEmail');
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
