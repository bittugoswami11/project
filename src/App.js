import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import './components/navbar.css'
import{BrowserRouter,Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path='/'element={<Home/>}/>
  <Route path='/about'element={<About/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
