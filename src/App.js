import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';

function App() {
  return (
    <div className="App">
    <Header />
    <main className='main'>
      <Home />
      <About />
    </main>
    </div>
  );
}

export default App;