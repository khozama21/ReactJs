import Login from "./Login";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Nav />

      </div>
      <Routes>
            <Route exact path="/" element={<Login />} />    
         
          </Routes>

    </div>
    </Router>
  );
}

export default App;
