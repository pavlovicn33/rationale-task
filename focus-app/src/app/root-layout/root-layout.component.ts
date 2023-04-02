import { Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root-layout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.scss'],
  animations: [
    trigger('dropdown', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'translateY(-10px)',
        })
      ),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('200ms ease-out')),
    ]),
  ],
})
export class RootLayoutComponent implements OnInit {
  dropdownState: string = 'closed';
  notificationCount: number = 2;
  status:boolean = true;
  @ViewChild('myDiv') myDiv!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  toggleDropdown() {
    this.status = !this.status
    this.dropdownState = this.dropdownState === 'closed' ? 'open' : 'closed';
    this.myDiv.nativeElement.focus();

  }
  hideDropdown() {
    this.status = true
    this.dropdownState = 'closed';
  }

}
