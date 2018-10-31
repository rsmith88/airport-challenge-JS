function Airport() {
  this._planeCount = 0
  this.CAPACITY = 2
};

Airport.prototype.land = function(plane) {
  if (!plane._flying) {
    throw new Error('Error: This plane is not in flight.');
  } else if (this._planeCount >= this.CAPACITY) {
    throw new Error('Error: Airport full.');
  } else {
    plane.grounded();
    this._planeCount += 1;
  };
};

Airport.prototype.takeOff = function(plane) {
  if(plane._flying) {
    throw new Error('Error: This plane is already in flight.');
  } else {
    plane.inFlight();
    console.log("Plane has taken off!!");
  };
};
