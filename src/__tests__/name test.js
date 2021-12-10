import Validator from '../js/classes/Validator';

test('wrong first sym', () => {
  expect(new Validator('-foo').validateUsername()).toEqual(false);
})

test('too many digits', () => {
  expect(new Validator('user12345').validateUsername()).toEqual(false);
})

test('wrong last sym', () => {
  expect(new Validator('bar-').validateUsername()).toEqual(false);
})

test('wrong sym', () => {
  expect(new Validator('User+user').validateUsername()).toEqual(false);
})

test('ok name', () => {
  expect(new Validator('User123ok').validateUsername()).toEqual(true);
})


