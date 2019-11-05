import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';

import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  public canvasHeight = window.innerHeight;
  public canvasWidth = window.innerWidth * .676;
  public canvasDimensions: number[] = [this.canvasHeight, this.canvasWidth];
  public navHome: boolean;
  public newLayer: boolean;
  public editLayer: boolean;


  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.dataService.getCanvasDimensions(this.canvasWidth, this.canvasHeight);

    this.navHome = true;
    this.newLayer = false;
    this.editLayer = false;

  }

  setNavMenu(choice) {

    switch(choice) {
      case('newlayer'):

        this.navHome = false;
        this.editLayer = false;
        this.newLayer = true;
        break;

      case('editlayer'):

        this.navHome = false;
        this.newLayer = false;
        this.editLayer = true;
        break;

      case('home'):

        this.navHome = true;
        this.newLayer = false;
        this.editLayer = false;
    }
  }

  goHome() {
    this.setNavMenu('home');
  }

  showEditLayers() {

    this.navHome = false;
    this.newLayer = false;
    this.editLayer = true;

  }

}
