import { numberList } from './numberList';

describe('numberList', () => {
  it('should return a list of 10 numbers', async () => {
    const result = await numberList();
    expect(result).toHaveLength(10);
  });

  it('should include numbers from 1 to 10', async () => {
    const result = await numberList();
    const values = result.map((item) => item.value);
    expect(values).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should have correct text representations', async () => {
    const result = await numberList();
    const textMap = new Map(result.map((item) => [item.value, item.text]));

    expect(textMap.get(1)).toBe('Um');
    expect(textMap.get(5)).toBe('Cinco');
    expect(textMap.get(10)).toBe('Dez');
  });
});
