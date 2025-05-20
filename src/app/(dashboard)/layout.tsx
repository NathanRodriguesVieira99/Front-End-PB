import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
