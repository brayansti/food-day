import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const creditRequest = gql`
  query {
    allCreditRequestses{
      id
      creditValue
      user{
        name
        lastName
      }
    }
  }
`;

@Component({
  selector: 'app-credit-request',
  templateUrl: './credit-request.page.html',
  styleUrls: ['./credit-request.page.scss'],
})


export class CreditRequestPage implements OnInit {
  private querySubscription: Subscription;
  dataCredits = [];

  constructor(
    private apollo: Apollo,
    public route: Router
  ) { }

  ngOnInit() {
    this.getCreditRequest();
  }

  getCreditRequest(){
    this.querySubscription = this.apollo
    .watchQuery({
      query: creditRequest
    })
    .valueChanges.subscribe(({data}) => {
      this.dataCredits = data['allCreditRequestses'];
      console.log(data);
    });
  }

  seeDetaill(creditId:string){
    console.log(creditId);
    this.route.navigate([`/menu/credit-detail/${creditId}`])
  }

}
