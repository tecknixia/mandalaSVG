export class Square {

  public type: string;
  public number: number;
  public xPos: number;
  public yPos: number;
  public height: number;
  public width: number;
  public layer: number;
  public layerRad: number;
  public rotation: number;
  public red: number;
  public green: number;
  public blue: number;
  public color: string;
  public centerPoint: number[];

  constructor() {}

  create(number, size, layerNum, layerRad) {
    this.type = 'square';
    this.number = number;
    this.xPos = 0;
    this.yPos = 0;
    this.width = size*2;
    this.height = size*2;
    this.layer = layerNum;
    this.layerRad = layerRad;
    this.red = Math.floor(Math.random() * (256));
    this.green = Math.floor(Math.random() * (256));
    this.blue = Math.floor(Math.random() * (256));

    this.color = "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
  }

  calculatePosition(i, number, angle, layerRad) {
    //position of circle drawing point from center point

    console.log('square.drawPosition Accessed!');

    let aSqrSin = Math.sin(angle * i);
    // calculate sine of the angle

    console.log(aSqrSin);

    let aSqrOpposite = aSqrSin * layerRad;
    // multiply sine of angle by radius to get opposite

    let aSqrCos = Math.cos(angle * i);
    // calculate cosine of the angle

    let aSqrAdjacent = aSqrCos * layerRad;
    // multiply cosine of angle by radius to get adjacent

    //let topLeftCorner = [Math.round(aSqrAdjacent), Math.round(aSqrOpposite)];

    this.centerPoint = [Math.round(aSqrAdjacent), Math.round(aSqrOpposite)];

    console.log('from square.ts method, this.centerPoint: '+this.centerPoint);

    console.log('square.drawPosition Completed!');
  }
}
