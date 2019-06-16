import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Inicio',
      url: '/menu/initial',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/menu/profile',
      icon: 'body'
    },
    {
      title: 'Formulario',
      url: '/menu/form-borrower',
      icon: 'clipboard'
    }
  ];

  selectedPath = ''; 

  constructor(
    private router: Router,
    private navCtrl: NavController,

  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
    
   }

  ngOnInit() {
    
  }

  cerrarSecion() {
    this.navCtrl.navigateForward('/home');
  }



}
