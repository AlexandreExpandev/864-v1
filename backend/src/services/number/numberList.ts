import { NumberEntity } from './numberTypes';

/**
 * @summary
 * Returns a list of all available numbers with their text representations
 *
 * @returns {Promise<NumberEntity[]>} Array of number entities
 */
export async function numberList(): Promise<NumberEntity[]> {
  // This would typically fetch from a database, but for this simple app
  // we'll return a static list of numbers
  const numbers: NumberEntity[] = [
    { id: 1, value: 1, text: 'Um' },
    { id: 2, value: 2, text: 'Dois' },
    { id: 3, value: 3, text: 'Três' },
    { id: 4, value: 4, text: 'Quatro' },
    { id: 5, value: 5, text: 'Cinco' },
    { id: 6, value: 6, text: 'Seis' },
    { id: 7, value: 7, text: 'Sete' },
    { id: 8, value: 8, text: 'Oito' },
    { id: 9, value: 9, text: 'Nove' },
    { id: 10, value: 10, text: 'Dez' },
  ];

  return numbers;
}
