describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    plane1 = new Plane();
    plane2 = new Plane();
  });

  it("should instruct a plane to land", function() {
    airport.land(plane);
    expect(plane._flying).toEqual(false);
  });

  it("should allow plane to takeoff", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(plane._flying).toEqual(true);
  });

  it("should refuse landing if plane is not in flight", function() {
    airport.land(plane);
    expect(function() {airport.land(plane)} ).toThrow(new Error("Error: This plane is not in flight."))
  });

  it("should refuse takeoff if plane is already in flight", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(function() {airport.takeOff(plane)} ).toThrow(new Error("Error: This plane is already in flight."))
  });

  it("should refuse landing if airport is at capacity", function() {
  // for (var i = 0; i < 6; i++) {
      airport.land(plane1);
      airport.land(plane2);
    expect(function() {airport.land(plane)} ).toThrow(new Error("Error: Airport full."))
  });

});
