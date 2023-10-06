import './App.css';
import About from './Components/about';
import Experience from './Components/experience';
import Header from './Components/header';
import Home from './Components/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Experience/>
    </div>
  );
}

export default App;
