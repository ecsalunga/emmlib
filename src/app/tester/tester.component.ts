import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService, RatingToken } from '../core';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
  rating: RatingToken;

   constructor(private core: EmmLibCoreService) { 
    this.rating = new RatingToken(3);
  }

  ngOnInit() {
  }

}
