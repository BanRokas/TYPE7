import { multiply, makeLowerCase } from "./HelperFunctions";

test('multiply', () => {
  expect(multiply(2, 10)).toBe(20);
  expect(multiply(-6, 5)).toBe(-30);
});

test('makeLowerCase', () => {
  expect(makeLowerCase("Rokas")).toBe("rokas");
  expect(makeLowerCase("PuSrYčIaI")).toBe("pusryčiai");
});