// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone Number
test('testing a valid number with (123) 456-7890 format', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('testing a valid number with 098-765-4321 format', () => {
  expect(isPhoneNumber("098-765-4321")).toBe(true);
});

test('testing a not valid number with wrong format', () => {
  expect(isPhoneNumber("0987654321")).toBe(false);
});

test('testing a not valid number with letter', () => {
  expect(isPhoneNumber("12w4567890")).toBe(false);
});

// Email
test('testing a valid email with numbers', () => {
  expect(isEmail("anshisingh730@gmail.com")).toBe(true);
});

test('testing a valid email', () => {
  expect(isEmail("abc@yahoo.co")).toBe(true);
});

test('testing a not valid email with numbers', () => {
  expect(isEmail("name@000.edu")).toBe(false);
});

test('testing a not valid email', () => {
  expect(isEmail("a@uciedu")).toBe(false);
});

// Strong Password
test('testing a valid password with symbols', () => {
  expect(isStrongPassword("Pine_APple_")).toBe(true);
});

test('testing a valid password with numbers', () => {
  expect(isStrongPassword("rainbow_123")).toBe(true);
});

test('testing a not valid password starting with number', () => {
  expect(isStrongPassword("123guess")).toBe(false);
});

test('testing a not valid password with not enough characters', () => {
  expect(isStrongPassword("abc")).toBe(false);
});

test('testing a not valid password with too many characters', () => {
  expect(isStrongPassword("abc123def456ghi789")).toBe(false);
});

test('testing a not valid password with wrong symbols', () => {
  expect(isStrongPassword("pass&123")).toBe(false);
});

// Date
test('testing a valid date with 2 digits for XX', () => {
  expect(isDate("07/30/2003")).toBe(true);
});

test('testing a valid date with 1 digit for XX', () => {
  expect(isDate("1/1/2024")).toBe(true);
});

test('testing a not valid date', () => {
  expect(isDate("12/122/20222")).toBe(false);
});

test('testing a not valid date formatting', () => {
  expect(isDate("03-24-2023")).toBe(false);
});

// Hex Color
test('testing a valid 3 character hex code', () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test('testing a valid 6 character hex code', () => {
  expect(isHexColor("#C07869")).toBe(true);
});

test('testing a not valid hex code with wrong letters', () => {
  expect(isHexColor("#69Z09Y")).toBe(false);
});

test('testing a not valid hex code with wrong amount of characters', () => {
  expect(isHexColor("#CCCC")).toBe(false);
});
