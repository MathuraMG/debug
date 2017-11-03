/****************************************
  (x2,y2) --------- (x3,y3)
          \       /
           \     /
            \   /
             \ /
              V
        (x1,y1)
****************************************/





class triangleFr{
  constructor(x, y, size, flag, dir) {
    this.size = size;
    this.flag = flag;
    if (dir == 1) {

      this.x1 = x;
      this.y1 = y;
      this.x2 = x - size * 0.5;
      this.y2 = y - size * 0.866;
      this.x3 = x + size * 0.5;
      this.y3 = y - size * 0.866;
    } else if (dir == 2) {

      this.x1 = x - size * 0.5;
      this.y1 = y + size * 0.866;
      this.x2 = x - size;
      this.y2 = y;
      this.x3 = x;
      this.y3 = y;
    } else if (dir == 3) {
      this.x1 = x + size * 0.5;
      this.y1 = y + size * 0.866;
      this.x2 = x + size;
      this.y2 = y;
      this.x3 = x;
      this.y3 = y;
    }

  }


  display() {
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, );
    return ({
      xup: (this.x3 + this.x2) / 2,
      yup: this.y2,
      xleft: (this.x1 + this.x2) / 2,
      yleft: (this.y1 + this.y2) / 2,
      xright: (this.x1 + this.x3) / 2,
      yright: (this.y1 + this.y3) / 2,
      size: this.size / 2
    });
  }
}
