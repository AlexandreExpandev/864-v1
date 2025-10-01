import { NumberEntity } from './numberTypes';
import { numberList } from './numberList';

/**
 * @summary
 * Gets a specific number by its numeric value
 *
 * @param {number} id - The numeric value to retrieve
 * @returns {Promise<NumberEntity|null>} The number entity or null if not found
 */
export async function numberGet(id: number): Promise<NumberEntity | null> {
  // Get all numbers
  const numbers = await numberList();

  // Find the specific number
  const number = numbers.find((num) => num.value === id);

  return number || null;
}
