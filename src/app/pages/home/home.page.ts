import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rates: any[];
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo,
    private navCtrl: NavController
  ) { }
  pushUserNavCtrl() {
    // this.navCtrl.navigateForward(`/user/${ this.valor }`);
    this.navCtrl.navigateForward(`/mapa`);
  }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
             allUsers{
              name
              id
              } 
          }
        `,
      })
      .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
        this.rates = result.data && result.data.allUsers;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
}
