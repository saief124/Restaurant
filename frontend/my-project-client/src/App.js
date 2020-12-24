import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import OrderContainer from './components/OrderContainer'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router> 
        <NavBar />
        <Route exact path ="/" component= {LandingPage} />
        <Route exact path ="/menu" component= {Menu} />
        <Route exact path ="/about" component= {About} />
        <Route exact path ="/contact" component= {Contact} />
        <Route exact path ="/order" component= {OrderContainer} />
      </Router>
    </div>
  );
}

export default App;
