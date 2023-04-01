import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/shared/models/cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: Cards[] = [];

  constructor() {
    this.cards = [
      {
        icon: 'meetings',
        quantity: 23,
        name: 'Meetings',
        color: '#1495F0',
      },
      {
        icon: 'items',
        quantity: 11,
        name: 'Items',
        color: '#D39BF5',
      },
      {
        icon: 'actions',
        quantity: 15,
        name: 'Actions',
        color: '#EA4335',
      },
      {
        icon: 'reminders',
        quantity: 9,
        name: 'Reminders',
        color: '#FFB017',
      },
      {
        icon: 'notes',
        quantity: 18,
        name: 'Notes',
        color: '#5CB85C',
      },
    ];
  }

  ngOnInit() {}
}
