import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-interface-nav-data',
  templateUrl: './interface-nav-data.component.html',
  styleUrls: ['./interface-nav-data.component.css']
})
export class InterfaceNavDataComponent implements OnInit {

  @Input() public shapeType;
  @Input() public showGenerateButton: boolean;
  @Output() public saveButtonEmitter = new EventEmitter();

  constructor(public dataService: DataService) { }

  ngOnInit() {

    // Things to change -

    // When no image displayed -
    // 1. changes can be made to form with no effect
    //    -- send info only when generate "Generate Layer" is clicked

    // When generate button is clicked -
    // 1. Modify this "Generate Layer" button function for this purpose
    //    -- send layer form data to dataService to be processed
    // 2. Create dataService function to process new data
    //    -- receive form data from "Generate Layer" button click
    //    -- calculate positions and properties
    //    -- then assign them to objects
    //    -- create array for layer
    //    -- (objects will have layer info built in)
    //    -- (don't need objects and layer data in hybrid array)
    //    -- (just a simple object array representing the layer)
    //    -- send array to dataService display processing function
    // 2. dataService display processing function will...
    //    -- use existing arrays and new arrays to create a display array
    //    -- combine new generated layer info with existing layer info
    //    -- combined info will be sent to display

    // When form is modified after image is displayed...
    // 1. When form is modified, send info to a dataService function
    //    -- dataService function will determine type of info
    //    -- then will call another dataService modification function
    //    -- modification function will apply new values to existing objects
    // 2. Pop objects from array when number is decreased
    //    -- save in a buffer for later use in case number is increased again
    // 3. Send info to display
    //    -- function will then call display processing function

    // When save button is clicked...
    // 1. dataService function will run that will push new array onto saved array

    // ... further instructions in dataService.sendNewImages

  }

  formChange(type, value, number) {
/*
    let angle = this.dataService.calculateAngle(number);
    this.dataService.modifyObjectValue(type, value);
*/
  }

  clickGenerateButton(type, number, size, layerRadius) {

    this.saveButtonEmitter.emit('true');
    let angle = this.dataService.calculateAngle(number);
    let newLayer = [type, number, size, angle, layerRadius];
    this.dataService.createNewLayer(newLayer);
    this.dataService.displayLayers();
  }

}
