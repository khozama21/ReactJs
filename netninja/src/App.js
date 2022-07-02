import { Home } from "./components/Home";
import Nav from "./components/Nav";
import style from './index.css'
import Create from "./components/create";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blogs from "./components/singleBlog";




function App() {
  return (
    <Router>

      <div className="container-fluid">

        <Nav />


        <div  >
          <Routes>
            <Route exact path="/" element={<Home />} />
       

        
            <Route path="/create" element={<Create />} />
         
        
            <Route path="/blogs/:id" element={<Blogs />} />
          </Routes>


        </div>
      </div>
    </Router>

  );
}

export default App;
