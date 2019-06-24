import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
//Apollo things
import { Apollo } from 'apollo-angular';
import { ApolloModule } from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { NavController } from '@ionic/angular';
//firebase
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './services/firebase/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';

import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';


firebase.initializeApp(environment.firebaseConfig);

const uri ="https://api.graph.cool/simple/v1/cjwffcf7f1p0r0139e62i4cth"
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpLinkModule,
    ApolloModule,
    HttpClientModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    private storage: Storage,
    private navCtrl: NavController,
  ) { 
    apollo.create({
      link: httpLink.create({ uri }), 
      cache: new InMemoryCache()
    }); 
    
    this.storage.get('firebaseId').then((val) => {
      console.log('firebaseId ON INIT → ' + val);
      this.checkAutentification(val);
    });

  }
  checkAutentification(firebaseId){
    if(firebaseId){
      console.log('Redireccion desde acá');
      // this.navCtrl.navigateForward('/menu/profile');
    }
  }
}
