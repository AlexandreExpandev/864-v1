import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/router';
import { ErrorBoundary } from '@/components/core/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong at the application root.</p>}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
