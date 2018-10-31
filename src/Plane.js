function Plane() {
  this._flying = true
};

Plane.prototype.flying = function() {
  return this._flying;
};

Plane.prototype.grounded = function() {
  this._flying = false;
};

Plane.prototype.inFlight = function() {
  this._flying = true;
};
