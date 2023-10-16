import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Article from './components/Article/Article';
import CaseStudies from './components/CaseStudies/CaseStudies';
import FeaturedBrands from './components/FeaturedBrands/FeaturedBrands';
import Footer from './components/Footer/Footer';
import { Element } from 'react-scroll';
// import TestCm from './components/TestCm/TestCm';

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Element name='Services'>
          <Hero />
        </Element>
      </header>
      <main>
        <Element name='Industries'>
          <Article />
        </Element>
        <Element name='Cases'>
          {/* <TestCm /> */}
          <CaseStudies />
        </Element>
        <FeaturedBrands />
      </main>
      <Element name='Contact'>
        <Footer />
      </Element>
    </>
  );
}

export default App;
