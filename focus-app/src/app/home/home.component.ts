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
import { Calendar, Calendars } from 'src/shared/models/calendar';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

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
  calendarData: Calendar[] = [];
  boardClass: string = '';
  dialogOpen: boolean = false;
  dialogFormOpen: boolean = false;
  quickItemForm: FormGroup;
  allowSubmit: boolean = false;
  showError: boolean = false;
  options: string[] = ['Spanish', 'Chinese', 'Arabic'];
  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    this.quickItemForm = this.fb.group({
      itemTitle: ['', [Validators.required]],
      type: ['', [Validators.required]],
      businessUnit: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      jobTitle: ['', [Validators.required]],
      languages: this.fb.array([], [Validators.required]),
      objective: ['', [Validators.required]],
    });

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
    this.getCalendar();
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.quickItemForm.get(
      'languages'
    ) as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  openDialog() {
    this.dialogOpen = true;
  }

  openFormDialog() {
    this.dialogFormOpen = true;
  }

  toggleSidebar() {
    this.boardClass = 'sidebar-opened';
    this.isOpen = !this.isOpen;
  }

  exit() {
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

  get q() {
    return this.quickItemForm.controls;
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

  getCalendar() {
    this.service.getCalendars().subscribe((data: Calendars) => {
      this.calendarData = data.calendar;
    });
  }

  submitForm() {
    this.showError = true;
    if (this.quickItemForm.invalid) {
      return;
    }
    console.log(this.quickItemForm.value);
    let obj = JSON.stringify(this.quickItemForm.value);
    let element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(obj));
    element.setAttribute('download', "form.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    this.allowSubmit = true;
    this.dialogFormOpen = false;
    this.quickItemForm.reset();
    return;
  }

  onSubmit() {
    if (!this.allowSubmit) {
      return;
    }
  }
}
