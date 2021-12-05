import Validator from '../js/classes/Validator';

test('wrong first sym', () => {
    expect(() => new Validator('-foo').validateUsername().toThrow('Wrong name'));
})

test('too many digits', () => {
  expect(() => new Validator('user12345').validateUsername().toThrow('Wrong name'));
})

test('wrong last sym', () => {
  expect(() => new Validator('bar-').validateUsername().toThrow('Wrong name'));
})

