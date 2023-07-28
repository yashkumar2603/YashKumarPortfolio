import { lazy, Suspense } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { About, Hero, Navbar, StarsCanvas } from './components';
import { h } from 'maath/dist/misc-7d870b3c.esm';

const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Suspense fallback= {<h1>Loading....</h1>}>
          <Experience />
        </Suspense>
        
        <Suspense fallback= {<h1>Loading....</h1>}>
          <Tech />
        </Suspense>
        
        <Suspense fallback= {<h1>Loading....</h1>}>
          <Works />
        </Suspense>
        
        <Suspense fallback= {<h1>Loading....</h1>}>
          <Feedbacks />
        </Suspense>
        <Suspense fallback= {<h1>Loading....</h1>}>
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
