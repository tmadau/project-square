import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Article from './components/Article/Article';
import CaseStudies from './components/CaseStudies/CaseStudies';
import FeaturedBrands from './components/FeaturedBrands/FeaturedBrands';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <Article />
        <CaseStudies />
        <FeaturedBrands />
      </main>
      <Footer />
    </>
  );
}

export default App;
