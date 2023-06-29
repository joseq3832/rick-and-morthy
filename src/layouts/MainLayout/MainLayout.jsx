import { PageContent } from './components/PageContent';
import { Navigation } from './components/Navigation';

export const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 sm:px-4 md:px-2 py-12">
        <PageContent />
      </main>
    </div>
  );
};
