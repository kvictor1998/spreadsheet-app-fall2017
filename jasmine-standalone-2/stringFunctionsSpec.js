describe("String functions", function() {
  it("returns the length of a string correctly", function() {
    expect(len("")).toBe(0);
    expect(len("abc")).toBe(3);
    expect(len("Foo 123!")).toBe(8);
  });
  it("title for next test", function() {
    expect(2+2).toBe(4);
  });
  it("title for next next test", function() {
    expect(2+2).not.toBe(3);
  });
});
