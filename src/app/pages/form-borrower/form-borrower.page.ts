import { Component, OnInit } from '@angular/core';

import { IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';



@Component({
	selector: 'app-form-borrower',
	templateUrl: './form-borrower.page.html',
	styleUrls: ['./form-borrower.page.scss'],
})
export class FormBorrowerPage implements OnInit {
	@ViewChild(IonSlides) productSlider: IonSlides;

	constructor(
		private formBuilder: FormBuilder
	) {}

	slideOpts = {
		initialSlide: 0,
		allowTouchMove: false
	};
	nextIonSlide(){
		//console.log(this.registerForm.controls.requiredInput.errors);
		// https://www.tutsmake.com/angular-7-reactive-form-validation-simple-example/
		this.productSlider.slideNext()
	}
	prevIonSlide(){
		this.productSlider.slidePrev();
	}

	// Validadiones
	registerForm: FormGroup;
	submitted = false;

	ngOnInit() {
        this.registerForm = this.formBuilder.group({
            requiredInput: ['', Validators.required]
		});
	}
	// onSubmit() {
    //     this.submitted = true;
    //     if (this.registerForm.invalid) {
    //         return;
    //     }
    //     alert('SUCCESS!!');
    // }


}
