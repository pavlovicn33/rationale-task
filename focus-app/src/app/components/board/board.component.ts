import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input()
  boardData: any;
  @Input()
  header: string = '';
  @Input()
  subHeader: string = '';
  @Input()
  boardClass: string = '';

  constructor() {}

  ngOnInit(): void {}
}
