import { generateUniqueId } from './generate-unique-id';

describe('Generate Unique id', () => {
  it('should be defined', () => {
    expect(generateUniqueId()).toBeDefined();
  });
  it('returns a string', () => {
    expect(typeof generateUniqueId()).toBe('string');
  });

  it('returns a unique string', () => {
    const uuid1 = generateUniqueId();
    const uuid2 = generateUniqueId();
    expect(uuid1).not.toBe(uuid2);
  });
});
