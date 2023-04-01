import { Component, OnInit, Input } from '@angular/core';
import { Cards } from 'src/shared/models/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input()
  data!:Cards

  ngOnInit() {

  }
}
