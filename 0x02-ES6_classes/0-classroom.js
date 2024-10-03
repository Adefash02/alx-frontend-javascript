export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  // Getter method for maxStudentsSize
  get maxStudentsSize() {
    return this._maxStudentsSize;
  }

  // Setter method for maxStudentsSize
  set maxStudentsSize(value) {
    this._maxStudentsSize = value;
  }
}

