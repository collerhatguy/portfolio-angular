import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() dark!: boolean;
  @Output() changeDark: EventEmitter<null> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  handleClick() {
    this.changeDark.emit();
  }
}
