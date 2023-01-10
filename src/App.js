import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/home/Home';

function App() {
  return (
    <div className="App">
    <Header />
    <main className='main'>
      <Home />
    </main>
    </div>
  );
}

export default App;