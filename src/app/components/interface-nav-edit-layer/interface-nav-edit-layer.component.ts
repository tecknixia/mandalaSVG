import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Layer } from '../../services/layer';

@Component({
  selector: 'app-interface-nav-edit-layer',
  templateUrl: './interface-nav-edit-layer.component.html',
  styleUrls: ['./interface-nav-edit-layer.component.css']
})
export class InterfaceNavEditLayerComponent implements OnInit {

  @Output() public goBackEmitter = new EventEmitter();
  @Output() public showTitleEmitter = new EventEmitter();
  @Output() public showDataEmitter = new EventEmitter();

  public editLayers: boolean = true;
  public properties: boolean = false;
  public noLayers: boolean = true;
  public circleTrue: boolean = false;
  public showGenerateButton: boolean = false;
  public squareTrue: boolean = false;
  public selectedLayer: Layer;
  public layerInfo: any[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {

  //  this.layerInfo = this.dataService.sendLayerInfoToEditLayer();
    console.log('Edit Layer Component:');
  //  console.log(this.layerInfo);

    this.showDataEmitter.emit('hidden');

    if (this.dataService.numberOfLayers !== 0) {
      this.noLayers = false;
    }

  }

  goBack() {


  }

  propertiesBack() {
    this.editLayers = true;
    this.properties = false;
    this.goBackEmitter.emit();
    this.showDataEmitter.emit('hidden');
    this.showTitleEmitter.emit();
  }

  selectLayer(number) {
    console.log('selected layer number: '+number);
    this.selectedLayer = this.layerInfo[number - 1].layerNumber;
    this.editLayers = false;
    this.properties = true;
    this.noLayers = false; // can remove later
    this.showTitleEmitter.emit();


    if (this.layerInfo[number - 1].type === 'circle') {
      this.circleTrue = true;
      this.squareTrue = false;
      this.showDataEmitter.emit('circle');
    }

    if (this.layerInfo[number - 1].type === 'square') {
      this.squareTrue = true;
      this.circleTrue = false;
      this.showDataEmitter.emit('square');
    }
  }

}
