import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { NumberData } from '@/types/number';
import { ApiResponse } from '@/types/api';

interface UseNumberTextReturn {
  text: string | null;
  loading: boolean;
  error: string | null;
}

export const useNumberText = (number: number | null): UseNumberTextReturn => {
  const [text, setText] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (number === null) {
      setText(null);
      setError(null);
      setLoading(false);
      return;
    }

    const fetchNumberText = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get<ApiResponse<NumberData>>(`/external/numbers/${number}`);
        if (response.data.success) {
          setText(response.data.data.text);
        } else {
          throw new Error(response.data.error?.message || 'Failed to fetch number text.');
        }
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.error?.message || err.message || 'An unknown error occurred.';
        setError(errorMessage);
        setText(null);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNumberText();
  }, [number]);

  return { text, loading, error };
};
