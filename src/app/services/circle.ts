export class Circle {

  public type: string;
  public number: number;
  public radius: number;
  public layer: number;
  public layerRad: number;
  public xPos: number;
  public yPos: number;
  public red: number;
  public green: number;
  public blue: number;
  public color: string;
  public centerPoint: [number, number];

  constructor() {}

  create(number, size, layerNum, layerRad) {
    this.type = 'circle';
    this.number = number;
    this.radius = size;
    this.layer = layerNum;
    this.layerRad = layerRad
    this.xPos = 0;
    this.yPos = 0;
    this.red = Math.floor(Math.random() * (256));
    this.green = Math.floor(Math.random() * (256));
    this.blue = Math.floor(Math.random() * (256));

    this.color = "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
  }

  calculatePosition(i, number, angle, layerRad) {
    //position of circle drawing point from center point

    console.log('i: '+i);
    console.log('number: '+number);
    console.log('angle: '+angle);
    console.log('layerRad: '+layerRad);

    let aCirSin = Math.sin(angle * i);
    // calculate sine of the angle

    let aCirOpposite = aCirSin * layerRad;
    // multiply sine of angle by radius to get opposite

    let aCirCos = Math.cos(angle * i);
    // calculate cosine of the angle

    let aCirAdjacent = aCirCos * layerRad;
    // multiply cosine of angle by radius to get adjacent

    this.centerPoint = [Math.round(aCirAdjacent), Math.round(aCirOpposite)];

  }
}
