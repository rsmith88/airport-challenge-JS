describe("Weather", function() {

  beforeEach(function(){
    testWeather = new Weather ();
  });

  it("determines that the weather is not stormy", function() {
    spyOn(Math, "floor").and.returnValue(4);
    // testWeather.forecast();
    expect(testWeather.stormy()).toBe(false)
  });

  it("determines that the weather is stormy", function() {
    spyOn(Math, "floor").and.returnValue(10);
    // testWeather.forecast();
    expect(testWeather.stormy()).toBe(true)
  });

  // it("determines that the weather is stormy", function() {
  //   // spyOn(Math, "floor").and.returnValue(10);
  //   // testWeather.forecast();
  //   expect(testWeather.stormy()).toBe(true)
  //   console.log(testWeather.stormy)
  // });

});
