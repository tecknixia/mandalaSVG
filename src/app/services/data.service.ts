import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Layer } from './layer';
import { Circle } from './circle';
import { Square } from './square';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  public canvasWidth: number;
  public canvasHeight: number;
  public numberOfLayers: number = 0;
  //public layerArray: any[] = [];
  public displayLayerBuffer: any[] = [];
  public shapeNumberBuffer: any[] = []; // for future use, when changing number of shapes
  public savedLayerBuffer: any[] = [];
  public mostRecentLayer: any[] = [];
  public propertiesArray: any[] = [];
  public newLayerSubject = new BehaviorSubject(this.mostRecentLayer);
  public currentSubject = this.newLayerSubject.asObservable();

//  objectives:

//  1. combine layer visuals
//    - everytime save button is clicked, saved layer should stay on screen
//    - generate button should show a new layer along with the saved layers
//    - newLayerSubject is sending a layer at a time
//    - need to send saved layers along with generated layers
//  2. when hovering mouse over layer buttons, show that layer in red
//  3. create real time changes on edit controls
//  4. combine editing controls along with new layer generation

  constructor() { }

  calculatePositions(number, size, radius, layerRadius) {

    // create objects first, then run this function to modify values

    let radianAngle = 0;

    for(var i = 0; i < number; i++) {
      let sine = Math.sin(radianAngle * i);
      // calculate sine of the angle

      let opposite = sine * layerRadius;
      // multiply sine of angle by radius to get opposite

      let cosine = Math.cos(radianAngle * i);
      // calculate cosine of the angle

      let adjacent = cosine * layerRadius;
      // multiply cosine of angle by radius to get adjacent

      let centerPoint = [Math.round(adjacent), Math.round(opposite)];
    }




  }

  calculateAngle(number) {

    let degrees = 360/number;
    // number of degrees for each section of 360 degree circle
    // this is needed to draw the shapes around a central point

    let angle = ((degrees*Math.PI)/180);
    // converts the angle to radians

    return angle;
  }

  centerPosition() {
    let halfWidth = this.canvasWidth / 2;
    let halfHeight = this.canvasHeight / 2;
    let centerPos = [Math.round(halfWidth), Math.round(halfHeight)];
    return centerPos;
  }

  createNewLayer(layer) {

    let type = layer[0];
    let number = layer[1];
    let size = layer[2];
    let angle = layer[3];
    let layerRad = layer[4];

    // creates shapes for correct type and places them in an array
    // layer info contained in shape objects

    let shapes = [];

    if (layer[0] === 'circle') {

      for( var i = 1; i < Number(number) + 1; i++) {
        let circle = new Circle();
        circle.create(i, size, this.numberOfLayers, layerRad);
        circle.calculatePosition(i, number, angle, layerRad);
        shapes.push(circle);
      }
    }

    if (layer[0] === 'square') {

      for(var j = 1; j < Number(number) + 1; j++) {
        let square = new Square();
        square.create(j, size, this.numberOfLayers, layerRad);
        square.calculatePosition(j, number, angle, layerRad);
        shapes.push(square);
      }
    }

    // array of shapes is then copied to this.mostRecentLayer

    this.mostRecentLayer = shapes;

  }

  displayGetCanvasDimensions(): number[] {
    let canvasDimensions = [this.canvasWidth, this.canvasHeight];
    return canvasDimensions;
  }

  displayLayers() {

    this.displayLayerBuffer = [];

    for (var i = 0; i < this.savedLayerBuffer.length; i++) {
      this.displayLayerBuffer.push(this.savedLayerBuffer[i]);
    }

    for (var j = 0; j < this.mostRecentLayer.length; j++) {
      this.displayLayerBuffer.push(this.mostRecentLayer[j]);
    }

    this.newLayerSubject.next(this.displayLayerBuffer);
  }

  getCanvasDimensions(width, height): void {
    this.canvasWidth = width;
    this.canvasHeight = height;
  }


  getEditLayerData(): void {
    console.log('getEditLayerData Accessed!');
  }
/*
  getProperties(number): any[] {
    let selector = number - 1;
    let layer: Layer = this.layerArray[selector];

    this.propertiesArray = [layer.layerNumber, layer.type, layer.number, layer.size, layer.layerRadius, layer.shapeArray];

    console.log('this.propertiesArray = ');
    console.log(this.propertiesArray);

    return this.propertiesArray;
  }
*/
  modifyObjectValue(type, value, size, layerRad) {

    // Warning!  Modifications not used by display
    // create function that calculates positions so that generate
    // and modify functions can share it
    if(this.mostRecentLayer.length === 0){
      console.log('Layer not yet generated!');
      return;
    }

    if(this.mostRecentLayer.length != 0) {

      switch(type) {
        case('circle-number'):

          console.log('modifying value!');

          if (this.mostRecentLayer.length > value) {
            let difference = this.mostRecentLayer.length - value;

            for (var i = 0; i < difference; i++) {

              let shapeObject = this.mostRecentLayer.pop();
              this.shapeNumberBuffer.push(shapeObject);

            }

            let angle = this.calculateAngle(value);

            for (let i in this.mostRecentLayer) {
              let shapeObject = this.mostRecentLayer[i];
              shapeObject.calculatePosition(i, value, angle, layerRad);
            }

          }

          if (this.mostRecentLayer.length < value) {

            let difference = value - this.mostRecentLayer.length;
            console.log('value: '+ value);
            console.log('mostRecentLayer length: '+ this.mostRecentLayer.length);
            console.log('difference: '+ difference);

            for (var i = 0; i < difference; i++) {

              if (this.shapeNumberBuffer.length != 0) {
                console.log('shapeNumberBuffer is not equal to zero');
                let shapeObject = this.shapeNumberBuffer.pop();
                this.mostRecentLayer.push(shapeObject);
              } else {
                let circle = new Circle();
                let circleNumber = this.mostRecentLayer.length + i + 1;
                circle.create(circleNumber, size, this.numberOfLayers, layerRad);
                this.mostRecentLayer.push(circle);
              }
            }

            let angle = this.calculateAngle(value);

            for (let i in this.mostRecentLayer) {
              let shapeObject = this.mostRecentLayer[i];
              shapeObject.calculatePosition(i, value, angle, layerRad);
            }
          }

          this.displayLayers();

          break;

        case('circle-size'):

          for (let i in this.mostRecentLayer) {
            let shapeObject = this.mostRecentLayer[i];
            shapeObject.radius = value;
          }

          this.displayLayers();

          break;

        case('circle-radius'):

          for (let i in this.mostRecentLayer) {
            let number = this.mostRecentLayer.length;
            let angle = this.calculateAngle(number);
            let shapeObject = this.mostRecentLayer[i];
            let index = i + 1;
            shapeObject.layerRad = value;
            shapeObject.calculatePosition(index, number, angle, value);
          }
        console.log(this.mostRecentLayer[0].centerPoint);
        this.displayLayers();

          break;

        case('square-number'):

          if(this.mostRecentLayer != undefined) {
        //    this.mostRecentLayer.number = value;
          }

          break;

        case('square-size'):


          if(this.mostRecentLayer != undefined) {
          //  this.mostRecentLayer.size = value;
          }

          break;

        case('square-radius'):

          if(this.mostRecentLayer != undefined) {
        //    this.mostRecentLayer.layerRadius = value;
          }

        }

    }
  }

  saveMostRecentLayer() {

    console.log('this.numberOfLayers: '+this.numberOfLayers);

    if (this.mostRecentLayer === undefined) {
      console.log('Layer may have already been saved or has not yet been generated.');
      console.log('Please generate new layer before trying again.');
    }
    //layerToSave.layerNumber = Number(layerToSave.layerNumber) + 1;
    for(var i = 0; i < this.mostRecentLayer.length; i++) {
      this.savedLayerBuffer.push(this.mostRecentLayer[i]);
    }
  }
/*
  sendLayerInfoToEditLayer(): object[] {
    return this.layerArray;
  }
  */
}

/*

sendNewImages(type, number, size, layerRadius) {

  // changes to be made:
  // rename function to "sendImages" at some point
  // accept an array of objects from the layer
  // the layer that has changes to be displayed should be identified
  // use dataService info for saved layers
  // use argument variable for unsaved displayed images
  // combine into a layer array that is to be sent

  console.log('this.layerArray:');
  console.log(this.layerArray);

  let shapeArray = [];

  let degrees = 360/number;
  // number of degrees for each section of 360 degree circle
  // this is needed to draw the shapes around a central point

  let radianAngle = ((degrees*Math.PI)/180);
  // converts the angle to radians

  let sine = Math.sin(radianAngle * i);
  // calculate sine of the angle

  let opposite = sine * layerRadius;
  // multiply sine of angle by radius to get opposite

  let cosine = Math.cos(radianAngle * i);
  // calculate cosine of the angle

  let adjacent = cosine * layerRadius;
  // multiply cosine of angle by radius to get adjacent

  let centerPoint = [Math.round(adjacent), Math.round(opposite)];

  if (type === 'circle') {

    for( var i = 1; i < Number(number) + 1; i++) {
      let circle = new Circle();
      circle.create(i, size);
      circle.drawPosition(i, number, radianAngle, layerRadius);
      shapeArray.push(circle);
    }
  }

  if (type === 'square') {
    for(var j = 1; j < Number(number) + 1; j++) {
      let square = new Square();
      square.create(j, size);
      square.drawPosition(j, number, radianAngle, layerRadius);
      shapeArray.push(square);

    }
  }

  let newImage = new Layer(this.numberOfLayers, type, number, size, layerRadius);
  newImage.shapeArray = shapeArray;

  console.log('Layer Generated!');
  console.log(newImage);

  let newImageArray = [];

  for(var k = 0; k < this.layerArray.length; k++){
    newImageArray.push(this.layerArray[k]);
  }

  newImageArray.push(newImage);

  this.newLayerSubject.next(newImageArray);
  this.mostRecentLayer = newImage;
}

canvasSizeFromDisplay(width, height) {
  this.currentCanvasSize = [width, height];
}

createLayer(type, number, size, layerRadius) {

  this.numberOfLayers++;

  if (type === 'circle') {
    this.findLayerCircAngle(number, layerRadius);
  }

  if (type === 'square') {
    this.findLayerSqurAngle(number, layerRadius);
  }

  let newLayer = new Layer(this.numberOfLayers, type, number, size, layerRadius);

  this.layerArray.push(newLayer);
}
*/
/*
sendToDisplay(layer, numberOfLayers): void {

  console.log('sendToDisplay called by a new layer component');
  console.log(layer);
  this.newLayerSubject.next(layer);
  console.log(numberOfLayers);
  this.layerArray.push(layer);
  console.log('sendToDisplay completed!');
}
*/
