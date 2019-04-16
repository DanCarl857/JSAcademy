class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(another) {
      return new Vector(this.x + another.x, this.y + another.y);
    }
  
    minus(another) {
      return new Vector(this.x - another.x, this.y - another.y);
    }
  
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }