import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  items: any[] = [];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.5,
  };

  constructor() {}

}
