import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-interface-display',
  templateUrl: './interface-display.component.html',
  styleUrls: ['./interface-display.component.css']
})
export class InterfaceDisplayComponent implements OnInit {

  @ViewChild('displayCanvas', {static: true}) public canvasRef: ElementRef;

  public layerArray: object[] = [];

  public displayContext: CanvasRenderingContext2D;

  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.displayContext = this.canvasRef.nativeElement.getContext('2d');

    let canvasDimensions = this.dataService.displayGetCanvasDimensions();

    console.log('CANVAS DIMENSIONS - WIDTH: ' + canvasDimensions[0] + ', HEIGHT: ' + canvasDimensions[1]);
    console.log('CENTER POSITION: '+ this.dataService.centerPosition());
    this.canvasRef.nativeElement.width = canvasDimensions[0];
    this.canvasRef.nativeElement.height = canvasDimensions[1];

    this.dataService.currentSubject.subscribe(data => this.renderNewImages(data));

  }

  renderNewImages(data) {

    if (data[0] === undefined) {
      return;
    }

    let centerPos = this.dataService.centerPosition();
    let canvasDimensions = this.dataService.displayGetCanvasDimensions();

    this.displayContext.clearRect(0, 0, canvasDimensions[0], canvasDimensions[1]);

    for(var i = 0; i < data.length; i++) {
      let shapeObject = data[i];

      if (shapeObject.type === 'circle') {

        let cirXPos = centerPos[0] + shapeObject.centerPoint[0];

        let cirYPos = centerPos[1] + shapeObject.centerPoint[1];

        this.displayContext.beginPath();
        this.displayContext.lineWidth = 5;
        this.displayContext.strokeStyle = shapeObject.color;
        this.displayContext.arc(cirXPos, cirYPos, shapeObject.radius, 0, (Math.PI * 2));
        this.displayContext.stroke();


      }

      if (shapeObject.type === 'square') {

      let sqrXPos = centerPos[0] + shapeObject.centerPoint[0];
      let sqrYPos = centerPos[1] + shapeObject.centerPoint[1];

      let xDrawPos = sqrXPos - (shapeObject.width/2);
      let yDrawPos = sqrYPos - (shapeObject.height/2);

      this.displayContext.beginPath();
      this.displayContext.lineWidth = 5;
      this.displayContext.strokeStyle = shapeObject.color;
      this.displayContext.rect(xDrawPos, yDrawPos, shapeObject.width, shapeObject.height);
      this.displayContext.stroke();

      }
    }
  }

  renderSavedImages(data) {

  }

  renderImages(data) {

    console.log('renderImages running...');

    let centerPos = this.dataService.centerPosition();
    let canvasDimensions = this.dataService.displayGetCanvasDimensions();

    console.log('RENDER IMAGES: CANVAS DIMENSIONS: ');
    console.log('WIDTH: ' + canvasDimensions[0]);
    console.log('HEIGHT: ' + canvasDimensions[1]);

    this.displayContext.clearRect(0, 0, canvasDimensions[0], canvasDimensions[1]);

    if (data.circleArray != undefined) {

      for(var i=0;i<data.circleArray.length;i++) {

        let cirXPos = centerPos[0] + data.circleArray[i].centerPoint[0];

        let cirYPos = centerPos[1] + data.circleArray[i].centerPoint[1];

        if (i === 0) {
          console.log('Drawing a circle!');

          this.displayContext.beginPath();
          this.displayContext.lineWidth = 5;
          this.displayContext.strokeStyle = data.circleArray[i].color;
          //this.displayContext.moveTo(cirXPos, cirYPos);
          //this.displayContext.lineTo(centerPos[0], centerPos[1]);
          this.displayContext.arc(cirXPos, cirYPos, data.circleArray[i].radius, 0, (Math.PI * 2));
          //this.displayContext.lineTo(centerPos[0], centerPos[1]);
          this.displayContext.stroke();
          console.log('Drew a circle.');
        }

        if (i > 0) {
          console.log('Drawing a circle!');

          this.displayContext.beginPath();
          this.displayContext.lineWidth = 5;
          this.displayContext.strokeStyle = data.circleArray[i].color;
          //this.displayContext.moveTo(cirXPos, cirYPos);
          //this.displayContext.lineTo(centerPos[0], centerPos[1]);
          this.displayContext.arc(cirXPos, cirYPos, data.circleArray[i].radius, 0, (Math.PI * 2));
          //this.displayContext.lineTo(centerPos[0], centerPos[1]);
          this.displayContext.stroke();

          console.log('Drew a circle.');
        }
      }
    }

    if (data.squareArray != undefined) {
      for(var j=0;j<data.squareArray.length;j++) {

        let sqrXPos = centerPos[0] + data.squareArray[j].centerPoint[0];
        let sqrYPos = centerPos[1] + data.squareArray[j].centerPoint[1];

        let xDrawPos = sqrXPos - (data.squareArray[j].width/2);
        let yDrawPos = sqrYPos - (data.squareArray[j].height/2);

        console.log('Drawing a square!');

        this.displayContext.beginPath();
        this.displayContext.lineWidth = 5;
        this.displayContext.strokeStyle = data.squareArray[j].color;
        this.displayContext.rect(xDrawPos, yDrawPos, data.squareArray[j].width, data.squareArray[j].height);
        this.displayContext.stroke();

        console.log('Drew a square.');
      }
    }

    console.log('renderImages completed.');

  }
}
