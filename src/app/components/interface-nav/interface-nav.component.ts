import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-interface-nav',
  templateUrl: './interface-nav.component.html',
  styleUrls: ['./interface-nav.component.css']
})
export class InterfaceNavComponent implements OnInit {

  @Output() public goBackEmitter = new EventEmitter();
  @Output() public editLayersEmitter = new EventEmitter();

  public numberOfLayers: number;
  public shapeType: string;
  public showCircles: boolean;
  public showSquares: boolean;
  public showBackButton: boolean;
  public showEditButton: boolean;
  public showEditTitle: boolean;
  public showGenerateButton: boolean;
  public showSaveButton: boolean;
  public showShapeButtons: boolean;
  public showLayersList: boolean;
  public showData: boolean;
  public navHome: boolean;
  public newLayer: boolean;
  public newLayerTitle: boolean;
  public editLayer: boolean;

  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.navHome = true;
    this.showEditButton = true;
    this.editLayer = false;
    this.showEditTitle = false;
    this.newLayerTitle = false;
    this.newLayer = false;
    this.showSaveButton = false;
    this.showEditButton = false;
    this.showCircles = false;
    this.showSquares = false;
    this.showShapeButtons = false;
    this.showData = false;
    this.showGenerateButton = false;

    this.numberOfLayers = this.dataService.numberOfLayers;

  }

  setNavMenu(choice) {

    switch(choice) {
      case('newlayer'):

        this.navHome = false;
        this.editLayer = false;
        this.newLayer = true;
        this.newLayerTitle = true;
        this.showEditTitle = false;
        this.showShapeButtons = true;
        this.showBackButton = true;
        this.showGenerateButton = true;
        this.showData = false;
        this.showCircles = false;
        this.showSquares = false;

        if (this.dataService.numberOfLayers > 0) {
          console.log('dataService number of layers: '+this.dataService.numberOfLayers);
          this.showEditButton = true;
        }

        break;

      case('editlayer'):

        this.navHome = false;
        this.newLayer = false;
        this.newLayerTitle = false;
        this.editLayer = true;
        this.showEditTitle = true;
        this.showData = false;
        this.showGenerateButton = false;
        this.showShapeButtons = false;
        this.showSaveButton = false;
        this.showCircles = false;
        this.showSquares = false;
        this.showEditButton = false;
        this.showBackButton = true;
        break;

      case('layerprop'):

        this.navHome = false;
        this.newLayer = false;
        this.newLayerTitle = false;
        this.editLayer = true;
        this.showShapeButtons = false;
        this.showData = true;
        this.showCircles = false;
        this.showSquares = false;
        this.showEditButton = false;
        this.showBackButton = true;
        break;


      case('home'):

        this.navHome = true;
        this.newLayer = false;
        this.newLayerTitle = false;
        this.editLayer = false;
        this.showData = false;
        this.showEditButton = false;
        this.showEditTitle = false;
        this.showBackButton = false;
        this.showShapeButtons = false;
        this.showSaveButton = false;

        if (this.dataService.numberOfLayers > 0) {
          this.showEditButton = true;
        }
    }
  }

  goHome() {
    this.setNavMenu('home');
  }

  shapeSelected(shape) {

    if (shape === 'circles') {
      this.shapeType = 'circle';
      this.showSquares = false;
      this.showCircles = true;
      this.showData = true;
      this.newLayerTitle = false;
      this.showBackButton = false;
      this.showShapeButtons = false;
      this.showSaveButton = false;

    }

    if (shape === 'squares') {
      this.shapeType = 'square';
      this.showCircles = false;
      this.showSquares = true;
      this.showData = true;
      this.newLayerTitle = false;
      this.showBackButton = false;
      this.showShapeButtons = false;
      this.showSaveButton = false;
    }

    if (shape === 'back') {
      this.showCircles = false;
      this.showSquares = false;
      this.showShapeButtons = true;
      this.newLayerTitle = true;
      this.showBackButton = true;
    }
  }

  updateNumberOfLayers() {
    this.numberOfLayers = this.dataService.numberOfLayers;
    this.showEditButton = true;
  }

  saveLayerUpdate() {

    console.log('Saving Layer!');
    this.dataService.numberOfLayers++;
    this.dataService.saveMostRecentLayer();
    this.updateNumberOfLayers();
    this.showSaveButton = false;
  }

  saveButton(event) {

    if (event === 'true') {
      this.showSaveButton = true;
    }
    if (event === 'false') {
      this.showSaveButton = false;
    }
  }

  hideEditTitle() {
    this.showEditTitle = false;
    this.showBackButton = false;
  }

  showDataShapeType(shape) {
    this.shapeType = shape;
  }

}
