import { Circle } from './circle';
import { Square } from './square';

export class Layer {

  //circleArray: object[] = [];
  //squareArray: object[] = [];
  public shapeArray: object[];
  public cirAngle: number;
  public sqrAngle: number;

  constructor(

    public layerNumber: number,
    public type: string,
    public number: number,
    public size: number,
    public layerRadius: number

  ) { }
/*
  create() {
    console.log('Layer.create() Accessed!');

    for( var i = 1; i < Number(this.numberOfCircles) + 1; i++) {
      let circle = new Circle();
      circle.create(i, this.circleRadius);
      circle.drawPosition(i, this.numberOfCircles, this.cirAngle, this.layerRadius);
      this.circleArray.push(circle);
    }

    for(var j = 1; j < Number(this.numberOfSquares) + 1; j++) {
      let square = new Square();
      square.create(j, this.squareSize);
      square.drawPosition(j, this.numberOfSquares, this.sqrAngle, this.layerRadius);
      console.log(this.squareArray);
      this.squareArray.push(square);

    }

    console.log('--- Layer Created! ---');
    console.log('Layer Number: '+this.layerNumber);
    console.log('Squares: '+this.numberOfSquares);
    console.log('Size of Squares: '+this.squareSize);
    console.log('Square Rotation: '+this.rotation);
    console.log('Layer Radius: '+this.layerRadius);
    console.log('^^^ from layer.ts ^^^');

  }

  findLayerCircAngle(numCir, radius) {

    if (numCir > 0)  {

      let cirDegrees = 360/numCir;
      // number of degrees for each section of 360 degree circle
      // this is needed to find position for the shape to be drawn

      let cirRadianAngle = ((cirDegrees*Math.PI)/180);
      // converts the circle angle to radians

      this.cirAngle = cirRadianAngle;
    }
  }

  findLayerSqurAngle(numSqr, radius) {

    if (numSqr > 0)  {

      let sqrDegrees = 360/numSqr;
      // number of degrees for each section of 360 degree circle
      // this is needed to find position for the shape to be drawn

      let sqrRadianAngle = ((sqrDegrees*Math.PI)/180);
      // converts the square angle to radians

      this.sqrAngle = sqrRadianAngle;
    }
  }
  */
}
