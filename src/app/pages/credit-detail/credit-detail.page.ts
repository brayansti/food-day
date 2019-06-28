import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Storage } from '@ionic/storage';

import { Subscription } from 'rxjs';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const creditRequest = gql`
  query(
    $id: ID
  ) {
    CreditRequests(
      id: $id
    ){
      creditValue
      monthlyPayment
      createdAt
      reasonCredit
      user{
        name
        lastName
        phone
        gender
        currentOcupation{
          opupation
          laboralState
          totalIncome
        }
      }
    }
  }
`;

const activateCredit = gql`
  mutation ($id: ID!) {
    updateCreditRequests(
      id: $id
      creditState: true
    ){
      creditState
    }
  }
`

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.page.html',
  styleUrls: ['./credit-detail.page.scss'],
})


export class CreditDetailPage implements OnInit {
  private querySubscription: Subscription;

  idCredit = this.route.snapshot.paramMap.get('id');
  userAdmin:boolean;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.getCreditRequest();
    this.storage.get('isAdmin').then((val) => {
      val ? this.userAdmin = val : false;
      console.log(this.userAdmin);
    });
  }

  getCreditRequest(){
    this.querySubscription = this.apollo
    .watchQuery({
      query: creditRequest,
      variables: {
        id : this.idCredit,
      }
    })
    .valueChanges.subscribe(({data}) => {
      // this.dataCredits = data['allCreditRequestses'];
      console.log(data);
    });
  }

  activateCredit () {
    this.apollo.mutate({
      mutation: activateCredit,
      variables: {
        id : this.idCredit,
      }
    }).subscribe( ({data}) =>{
      console.log(data);
    },(error) =>{
      console.log(error);
    });
  }

}
