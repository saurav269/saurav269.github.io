import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';

function App() {
  return (
    <div className="App">
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
    </main>
    </div>
  );
}

export default App;