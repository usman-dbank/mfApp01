import { prefixFieldValues } from './prefix-field-values'; // Update 'your-file' with the path to your file

describe('prefixFieldValues', () => {
  it('should prefix field values correctly', () => {
    const obj = {
      field1: 'value1',
      field2: 'value2',
      field3: 'value3'
    };
    const keyPrefixes = {
      field1: 'prefix1_',
      field3: 'prefix3_'
    };
    const commonPrefix = 'common_';
    const result = prefixFieldValues(obj, keyPrefixes, commonPrefix);
    expect(result).toEqual({
      field1: keyPrefixes.field1 + commonPrefix + obj.field1,
      field2: obj.field2,
      field3: keyPrefixes.field3 + commonPrefix + obj.field3
    });
  });

  it('should return the original object if no keys to prefix', () => {
    const obj = {
      field1: 'value1',
      field2: 'value2'
    };
    const keyPrefixes = {};
    const commonPrefix = 'common_';

    const result = prefixFieldValues(obj, keyPrefixes, commonPrefix);

    expect(result).toEqual(obj);
  });
});
