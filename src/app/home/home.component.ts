import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;

  images = ['../../assets/1.jpg','../../assets/2.jpg','../../assets/3.jpg'];

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(config: NgbCarouselConfig, 
    private route: ActivatedRoute,
    private router: Router ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit() {
  }

  ImageClick() {
    this.router.navigate(['/product'], { relativeTo: this.route });
    // this.router.navigate(['/teams'], { relativeTo: this.route });
  }

}
