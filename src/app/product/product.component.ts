import {ChangeDetectionStrategy, Component, ViewEncapsulation, OnInit, ViewChild} from '@angular/core';
import {TeamsService} from '../shared/teams.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

type Position = 'start' | 'mid' | 'end';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  // @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;s


  items = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.items = this.teamsService.getTeams();
  }

//  scroll(position: Position) {
//     let scrollIndex: number;
//     switch (position) {
//       case 'start':
//         scrollIndex = 0;
//         break;
//       case 'mid':
//         scrollIndex = this.items.length / 2;
//         break;
//       case 'end':
//         scrollIndex = this.items.length;
//         break;
//     }
//     this.viewPort.scrollToIndex(scrollIndex, 'smooth');

}
