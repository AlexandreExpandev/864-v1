import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { NumberData } from '@/types/number';

export const useNumbers = () => {
  const [numbers, setNumbers] = useState<NumberData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        setLoading(true);
        const response = await api.get('/external/numbers');
        setNumbers(response.data.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch numbers.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNumbers();
  }, []);

  return { numbers, loading, error };
};
