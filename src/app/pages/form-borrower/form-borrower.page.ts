import { Component, OnInit } from '@angular/core';

import { Slides } from '@ionic/angular';


@Component({
	selector: 'app-form-borrower',
	templateUrl: './form-borrower.page.html',
	styleUrls: ['./form-borrower.page.scss'],
})
export class FormBorrowerPage implements OnInit {

	constructor(Slides : Slides) { }

	ngOnInit() {
	}
	

	slideOpts = {
		
	};

  //Move to Next slide
	public nex(){
		this.Slides.slideNext();
	}

}
