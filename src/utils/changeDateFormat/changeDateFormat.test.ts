import changeDateFormat from "./changeDateFormat";

describe("Given a changeDateFormat function", () => {
  describe("When it's invoked with the '2022-03-31' date and globalFormat 'false'", () => {
    test("Then it should return the '31-03-2022' date", () => {
      const date = "2022-03-1";
      const globalFormat = false;

      const expectedDate = "01-03-2022";

      const newDate = changeDateFormat(date, globalFormat);

      expect(newDate).toBe(expectedDate);
    });
  });

  describe("When it's invoked with the '2022-04-1' date and globalFormat 'true'", () => {
    test("Then it should return the '2022-04-01' date", () => {
      const date = "2022-04-1";
      const globalFormat = true;

      const expectedDate = "2022-04-01";

      const newDate = changeDateFormat(date, globalFormat);

      expect(newDate).toBe(expectedDate);
    });
  });

  describe("When it's invoked with the '31-03-2022' date and globalFormat 'false'", () => {
    test("Then it should return the '2022-03-31' date", () => {
      const date = "31-03-2022";
      const globalFormat = false;

      const expectedDate = "2022-03-31";

      const newDate = changeDateFormat(date, globalFormat);

      expect(newDate).toBe(expectedDate);
    });
  });
});
