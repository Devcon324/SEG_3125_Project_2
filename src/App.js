import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Create from './pages/Create';
import Shop from './pages/Shop';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

// This is a component named App that returns JSX template
// this is the first component that is rendered to the DOM
// sits at the top of the component tree
function App() {
  return (
    <Router>
      {/* Shows Navbar on All Pages */}
      < Navbar />
      {/* Router to different pages */}
      <Switch>
        <Route exact path="/">
          < Home />
        </Route>
        <Route exact path="/create">
          < Create />
        </Route>
        <Route exact path="/shop">
          < Shop />
        </Route>
        <Route exact path="/faq">
          < FAQ />
        </Route>
        <Route exact path="/contact">
          < Contact />
        </Route>
        <Route exact path="/cart">
          < Cart />
        </Route>
      </Switch>
      {/* Shows Footer on All Pages */}
      < Footer />
      {/* end of site */}
    </Router>
  );
}

// this allows the App component to be imported and used in other files
export default App;
