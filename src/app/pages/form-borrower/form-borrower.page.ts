import { Component, OnInit } from '@angular/core';

import { IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';
// import { Slides } from 'ionic-angular';



@Component({
	selector: 'app-form-borrower',
	templateUrl: './form-borrower.page.html',
	styleUrls: ['./form-borrower.page.scss'],
})
export class FormBorrowerPage implements OnInit {
	@ViewChild(IonSlides) productSlider: IonSlides;

	constructor() { }

	ngOnInit() { }

	sliderPosition:number = 0;

	slideOpts = {
		initialSlide: 0,
		allowTouchMove: false
	};

	nextIonSlide(){
		this.productSlider.slideNext()
	}
	prevIonSlide(){
		this.productSlider.slidePrev();
	}

}
