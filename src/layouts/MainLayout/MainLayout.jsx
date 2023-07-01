import { PageContent } from './components/PageContent';
import { Navigation } from './components/Navigation';

export const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <main className="bg-rick-black-200">
        <PageContent />
      </main>
    </div>
  );
};
