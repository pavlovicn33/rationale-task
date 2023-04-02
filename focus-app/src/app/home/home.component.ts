import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/shared/models/cards';
import { ItemsList, TableData } from 'src/shared/models/tableData';
import { Actions, Task, Tasks } from 'src/shared/models/tasks';
import { DataService } from 'src/shared/services/data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'closed',
        style({
          transform: 'translateX(0)',
          visibility: 'hidden',
        })
      ),
      state(
        'open',
        style({
          transform: 'translateX(-344px)',
          visibility: 'visible',
        })
      ),
      transition('closed => open', [animate('0.300s')]),
      transition('open => closed', [animate('0.300s')]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  cards: Cards[] = [];
  table: ItemsList[] = [];
  tasks: Task[] = [];
  actions: Task[] = [];
  isOpen: boolean = false;
  boardClass: string = '';
  constructor(private service: DataService) {
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

  ngOnInit() {
    this.getTable();
    this.getTasks();
    this.getActions();
  }

  toggleSidebar() {
    this.boardClass = 'sidebar-opened';
    this.isOpen = !this.isOpen;
  }

  test() {
    this.isOpen = false;
    this.boardClass = 'sidebar-closed';
  }

  getTable() {
    this.service.getTableData().subscribe((data: TableData) => {
      this.table = data.itemsList;
    });
  }

  setColor(status: string, opacity: boolean) {
    let code = '';
    if (status == 'Approved') {
      code = '#5CB85C';
    }
    if (status == 'In Progress') {
      code = '#FFB017';
    }

    if (status == 'Rejected') {
      code = '#EA4335';
    }
    if (opacity) {
      code += '26';
    }
    return code;
  }

  getTasks() {
    this.service.getTasks().subscribe((data: Tasks) => {
      this.tasks = data.tasks;
    });
  }
  getActions() {
    this.service.getActions().subscribe((data: Actions) => {
      this.actions = data.actions;
    });
  }
}
