import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-borrower',
  templateUrl: './form-borrower.page.html',
  styleUrls: ['./form-borrower.page.scss'],
})
export class FormBorrowerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

slideOpts = {
  on: {
    beforeInit() {
      const swiper = this;
      swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      };
      swiper.params = Object.assign(swiper.params, overwriteParams);
      swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
    },
  }
};

}
