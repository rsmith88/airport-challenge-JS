describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    airport2 = new Airport();
    plane = new Plane();
    plane1 = new Plane();
    plane2 = new Plane();
  });

  it("should instruct a plane to land", function() {
    spyOn(airport.weather, "stormy").and.returnValue(false);
    airport.land(plane);
    expect(plane._flying).toEqual(false);
  });

  it("should allow plane to takeoff", function() {
    spyOn(airport.weather, "stormy").and.returnValue(false);
    airport.land(plane);
    airport.takeOff(plane);
    expect(plane._flying).toEqual(true);
  });

  it("should refuse landing if plane is not in flight", function() {
    spyOn(airport.weather, "stormy").and.returnValue(false);
    airport.land(plane);
    expect(function() {airport.land(plane)} ).toThrow(new Error("Error: This plane is not in flight."))
  });

  it("should refuse takeoff if plane is already in flight", function() {
    spyOn(airport.weather, "stormy").and.returnValue(false);
    airport.land(plane);
    airport.takeOff(plane);
    expect(function() {airport.takeOff(plane)} ).toThrow(new Error("Error: This plane is already in flight."))
  });

  it("should refuse landing if airport is at capacity", function() {
  // for (var i = 0; i < 6; i++) {
      spyOn(airport.weather, "stormy").and.returnValue(false);
      airport.land(plane1);
      airport.land(plane2);
    expect(function() {airport.land(plane)} ).toThrow(new Error("Error: Airport full."))
  });

  it("should store planes in the airplane hanger after landing", function() {
    spyOn(airport.weather, "stormy").and.returnValue(false);
    airport.land(plane);
    airport.land(plane1);
    expect(airport.hanger.length).toEqual(2);
  });

  it ("should remove plane from hanger after takeoff", function() {
    spyOn(airport.weather, "stormy").and.returnValue(false);
    airport.land(plane);
    airport.land(plane1);
    airport.takeOff(plane);
    expect(airport.hanger.includes(plane)).toEqual(false);
  });

  it ("should refuse takeoff if plane not at airport", function() {
    spyOn(airport.weather, "stormy").and.returnValue(false);
    airport2.land(plane);
    expect(function() {airport.takeOff(plane)} ).toThrow(new Error("Error: Plane is not at airport."))
  });

  it ("should refuse landing when weather is stormy", function() {
    spyOn(airport.weather, "stormy").and.returnValue(true);
    expect(function() {airport.land(plane)} ).toThrow(new Error("Error: Weather is too stormy to land."))
  });

  it ("should refuse takeoff when weather is stormy", function() {
    spyOn(plane, "_flying").and.returnValue(false);
    spyOn(airport.hanger, "includes").and.returnValue(true);
    spyOn(airport.weather, "stormy") .and.returnValue(true);
    expect(function() {airport.takeOff(plane)} ).toThrow(new Error("Error: Weather is too stormy to takeoff."))
  });


});
