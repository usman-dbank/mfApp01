import t from './t';

describe('Translation', () => {
  it('should get key', () => {
    expect(t('customer')).toBe('customer');
  });
});
