import './App.css';
import Home from './compo/Home/Home';
import Branches from './compo/Branches/Branches';
import Gallery from './compo/Gallery/Gallery';
import Events from './compo/Events/Events';
import Donate from './compo/Donate/Donate';
import {Route,Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/branches" element={<Branches/>}/>
        <Route exact path="/gallery" element={<Gallery/>}/>
        <Route exact path="/events" element={<Events/>}/>
        <Route exact path="/donate" element={<Donate/>}/>
      </Routes>

    </div>
  );
}

export default App;
