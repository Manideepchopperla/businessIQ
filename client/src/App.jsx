import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import EmptyState from './components/EmptyState';
import { BusinessProvider } from './context/BusinessContext';
import { useBusiness } from './context/BusinessContext';

function AppContent() {
  const { loading, businessData, error } = useBusiness();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <BusinessForm />
            {error && <ErrorMessage />}
          </div>
          
          <div className="space-y-6 flex items-center justify-center min-h-[300px]">
            {loading && !businessData && <LoadingSpinner />}
            {!loading && businessData && <BusinessCard />}
            {!loading && !businessData && !error && <EmptyState />}
          </div>
        </div>
      </main>
    </div>
  );
}


function App() {
  return (
    <BusinessProvider>
      <AppContent />
    </BusinessProvider>
  );
}

export default App;