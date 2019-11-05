import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'Intromainpage',
  templateUrl: './intromainpage.component.html',
  styleUrls: ['./intromainpage.component.css']
})

export class IntromainpageComponent implements OnInit {

  @ViewChild('introDesign', {static: true}) canvasRef: ElementRef;
  @ViewChild('introPage', {static: false}) thisPage: ElementRef;

  //@Output continueClickEvent = new EventEmitter();

  constructor(public ngZone: NgZone) {}

  //introPage = false
  title = 'Mandala SVG';
  running = false;
  size: number;
  canvasCtx: CanvasRenderingContext2D;

  timer = -1;
  forward = true;


  ngOnInit() {

    console.log('ngOnInit() started...');

    console.log(this.canvasRef);


    this.running = true;
    this.size = 0;

    let canvasCtx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext("2d");

    this.ngZone.runOutsideAngular(() => {
      this.circleGrowFill(canvasCtx, this.size);
    });

    console.log('ngOnInit() completed...');

  }

  ngOnDestroy() {
    this.running = false;
    this.timer=800;
    console.log('Animation stopped when component destroyed!');
  }

  continueClicked() {
    console.log('Button clicked!');

    this.timer=800;
    console.log('Animation stopped by button click!');
    this.thisPage.nativeElement.style.display = 'none';
    console.log('Opening interface...');
    window.location.href="./interface";

  }


  // let canvasWidth = this.canvasRef.nativeElement.width;
  // let canvasHeight = this.canvasRef.nativeElement.height;

  circleGrowFill(canvas, size) {

    //console.log('circleGrowFill() started...');

    this.timer++;

    switch (true) {

      case (this.timer === 800):
        console.log('timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size);
        console.log("Animation complete!");
        return;

        break;

      case (this.timer < 200 && this.forward === true && size < 100):

        console.log('timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size);
        size++;
        canvas.strokeStyle = 'rgb('+Math.floor((Math.random() * 255) + 1)+', '+Math.floor((Math.random() * 255) + 1)+', '+Math.floor((Math.random() * 255) + 1)+')';

      break;

      case (this.timer == 100 && this.forward == true && size == 100):

        this.forward = false;
        console.log('Changing direction! timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size + ' (at edge)');
        console.log('Changing color to black!');
        canvas.strokeStyle = 'black';
        canvas.beginPath();
        canvas.arc(100, 100, size, 0, 2 * Math.PI);
        canvas.stroke();
        size--;

      break;

      case (this.timer < 200 && this.forward === false && size > 1):

        console.log('timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size);
        size--;

      break;

      case (this.timer == 200 && this.forward === false && size == 1):

        this.forward = true;
        console.log('Changing direction! timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size + ' (at center)');
        size++;

      break;

      case (this.timer > 200 && this.timer < 300 && this.forward === true && size < 100):

        console.log('timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size);
        size++;
        canvas.strokeStyle = 'rgb('+Math.floor((Math.random() * 255) + 1)+', '+Math.floor((Math.random() * 255) + 1)+', '+Math.floor((Math.random() * 255) + 1)+')';

      break;

      case (this.timer == 300 && this.forward == true && size == 100):

        this.forward = false;
        console.log('Changing direction! timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size + ' (at edge)');
        console.log('Changing color to white!');
        canvas.strokeStyle = 'white';
        canvas.beginPath();
        canvas.arc(100, 100, size, 0, 2 * Math.PI);
        canvas.stroke();
        size--;

      break;

      case (this.timer > 300 && this.timer < 400 && this.forward === false && size > 1):

        console.log('timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size);
        size--;

      break;

      case (this.timer == 400 && this.forward === false && size == 1):

        this.forward = true;
        console.log('Changing direction! timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size + ' (at center)');
        size++;

      break;

      case (this.timer > 400 && this.timer < 500 && this.forward === true && size < 100):

        console.log('timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size);
        size++;
        canvas.strokeStyle = 'rgb('+Math.floor((Math.random() * 255) + 1)+', '+Math.floor((Math.random() * 255) + 1)+', '+Math.floor((Math.random() * 255) + 1)+')';

      break;

      case (this.timer == 500 && this.forward == true && size == 100):

        this.forward = false;
        console.log('Changing direction! timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size + ' (at edge)');
        console.log('Changing color to black!');
        canvas.strokeStyle = 'black';
        canvas.beginPath();
        canvas.arc(100, 100, size, 0, 2 * Math.PI);
        canvas.stroke();
        size--;

      break;

      case (this.timer > 500 && this.timer < 600 && this.forward === false && size > 1):

        console.log('timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size);
        size--;

      break;

      case (this.timer == 600 && this.forward === false && size == 1):

        this.forward = true;
        console.log('Changing direction! timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size + ' (at center)');
        size++;

      break;

      case (this.timer > 600 && this.timer < 700 && this.forward === true && size < 100):

        console.log('timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size);
        size++;
        canvas.strokeStyle = 'rgb('+Math.floor((Math.random() * 255) + 1)+', '+Math.floor((Math.random() * 255) + 1)+', '+Math.floor((Math.random() * 255) + 1)+')';

      break;

      case (this.timer == 700 && this.forward == true && size == 100):

        this.forward = false;
        console.log('Changing direction! timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size + ' (at edge)');
        console.log('Changing color to white!');
        canvas.strokeStyle = 'white';
        canvas.beginPath();
        canvas.arc(100, 100, size, 0, 2 * Math.PI);
        canvas.stroke();
        size--;

      break;

      case (this.timer > 700 && this.timer < 800 && this.forward === false && size > 1):

        console.log('timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size);
        size--;

      break;

      case (this.timer == 799):
        console.log('timer: ' + this.timer + ' | size forward ('+this.forward+'): ' + size);
        size --;
      break;

    }

    canvas.beginPath();
    canvas.arc(100, 100, size, 0, 2 * Math.PI);
    canvas.stroke();

    let loop = () => {
      this.circleGrowFill(canvas, size);
    };

    window.requestAnimationFrame(loop);

  }
}
