import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import MidContent from '../src/components/MidContent';
import Products from '../src/components/Products';
import Form from '../src/components/Form';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';

export default function HomeView() {
  return (
    <>
      <Navbar />
      <Hero />
      <Header text={'YENİ GELENLER'} />
      <Products />
      <MidContent />
      <Form />
      <Footer />
    </>
  );
}
