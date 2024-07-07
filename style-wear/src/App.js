import Navbar from './Navbar';
import Home from './Home';
import Hero from './Hero';

// This is a component named App that returns JSX template
// this is the first component that is rendered to the DOM
// sits at the top of the component tree
function App() {
  return (
    <div className="App">
      < Navbar />
      <div className="hero-image">
        < Hero />
      </div>
      <div className="content">
        < Home />
      </div>
    </div>
  );
}

// this allows the App component to be imported and used in other files
export default App;
