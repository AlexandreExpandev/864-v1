import { Select } from '@/components/ui/Select';
import { useAppStore } from '@/store/useAppStore';
import React from 'react';

export const NumberSelector = () => {
  const { selectedNumber, setSelectedNumber } = useAppStore();

  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const num = value ? parseInt(value, 10) : null;
    setSelectedNumber(num);
  };

  return (
    <div className="w-full md:w-64">
      <Select
        id="number-selector"
        label="Selecione um número"
        value={selectedNumber ?? ''}
        onChange={handleChange}
      >
        <option value="" disabled>
          Selecione um número
        </option>
        {numbers.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </Select>
    </div>
  );
};
