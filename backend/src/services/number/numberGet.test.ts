import { numberGet } from './numberGet';

describe('numberGet', () => {
  it('should return the correct number entity for valid id', async () => {
    const result = await numberGet(5);
    expect(result).not.toBeNull();
    expect(result?.value).toBe(5);
    expect(result?.text).toBe('Cinco');
  });

  it('should return null for invalid id', async () => {
    const result = await numberGet(11);
    expect(result).toBeNull();
  });
});
