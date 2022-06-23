import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';






function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Nav />

    
          <Routes>

            <Route path="/" element={ <Home />}/>
            <Route path="/about" element={ <About />}/>



          </Routes>





        


      </div>
    </BrowserRouter>
  );
}

export default App;
