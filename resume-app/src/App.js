import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import Summary from './components/Summary';
import Works from './components/Work';

function App() {
  return (
    <div>
      <Navigation />
      <Summary />
      <Works />
      <Skills />
    </div>
  );
}

export default App;
