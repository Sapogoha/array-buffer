import ArrayBufferConverter, { getBuffer } from '../app';

test('ArrayBufferConverter works as expected;', () => {
  const converter = new ArrayBufferConverter();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  converter.load(getBuffer());
  expect(converter.toString()).toBe(expected);
});
