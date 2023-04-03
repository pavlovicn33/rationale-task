import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const dialogAnimations = {
  overlay: trigger('dialogOverlay', [
    state(
      'void',
      style({
        opacity: 0,
      })
    ),
    state(
      '*',
      style({
        opacity: 1,
      })
    ),
    transition('void => *', animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    transition('* => void', animate('75ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
  ]),

  container: trigger('dialogContainer', [
    state(
      'void',
      style({
        opacity: 0,
        transform: 'scale(0.7)',
      })
    ),
    state(
      '*',
      style({
        opacity: 1,
        transform: 'scale(1)',
      })
    ),
    transition('void => *', animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    transition('* => void', animate('75ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
  ]),
};
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [dialogAnimations.overlay, dialogAnimations.container],
})
export class DialogComponent implements OnInit {
  isOpen = false;
  @Input() title: string = '';
  @Output() closed = new EventEmitter();
  @Output() submitted = new EventEmitter();
  
  constructor() {}
  ngOnInit(): void {}

  close() {
    this.closed.emit();
  }

  sendSubmit() {
    this.submitted.emit()
  }
}
