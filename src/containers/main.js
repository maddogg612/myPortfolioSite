import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Container = () => {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Container;
