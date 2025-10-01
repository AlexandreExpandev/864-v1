import { NumberSelector } from '@/components/features/numberSelector';
import { useAppStore } from '@/store/useAppStore';
import { useNumberText } from '@/hooks/useNumberText';

const HomePage = () => {
  const { selectedNumber } = useAppStore();
  const { text, loading, error } = useNumberText(selectedNumber);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg md:p-8">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:text-3xl">
          Conversor de Número para Texto
        </h1>
        <p className="mb-8 text-center text-gray-600">
          Selecione um número no menu suspenso para ver sua representação em texto.
        </p>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
          <NumberSelector />
          <div className="flex h-24 w-full items-center justify-center rounded-md bg-gray-100 p-4 md:w-auto md:flex-1">
            {loading && <p className="text-gray-500">Carregando...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && text && (
              <p className="text-4xl font-bold text-indigo-600 md:text-5xl">{text}</p>
            )}
            {!loading && !error && !text && <p className="text-gray-400">O texto aparecerá aqui</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
