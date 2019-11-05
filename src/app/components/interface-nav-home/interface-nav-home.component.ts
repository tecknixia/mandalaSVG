import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Circle } from '../../services/circle';
import { Square } from '../../services/square';

@Component({
  selector: 'app-interface-nav-home',
  templateUrl: './interface-nav-home.component.html',
  styleUrls: ['./interface-nav-home.component.css']
})
export class InterfaceNavHomeComponent implements OnInit {

//  @Output() public sendChoice = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
