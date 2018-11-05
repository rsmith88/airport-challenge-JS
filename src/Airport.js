function Airport() {
  this.hanger = []
  this.CAPACITY = 2
  this.weather = new Weather();
};

Airport.prototype.land = function(plane) {
  if (!plane._flying) {
    throw new Error('Error: This plane is not in flight.');
  } else if (this.hanger.length >= this.CAPACITY) {
    throw new Error('Error: Airport full.');
  } else if (this.weather.stormy()) {
    throw new Error('Error: Weather is too stormy to land.');
  } else {
    plane.grounded();
    this.hanger.push(plane);
  };
};

Airport.prototype.takeOff = function(plane) {
  if(plane._flying) {
    throw new Error('Error: This plane is already in flight.');
  } else if(!this.hanger.includes(plane)) {
    throw new Error('Error: Plane is not at airport.');
  } else if (this.weather.stormy()) {
    throw new Error('Error: Weather is too stormy to takeoff.');
  } else {
    plane.inFlight();
    this.hanger = this.hanger.filter(e => e !== plane);
    // this.hanger = remove(this.hanger, plane);
    console.log("Plane has taken off!!");
  };
};

// function remove(array, element) {
//     return array.filter(e => e !== element);
// }
