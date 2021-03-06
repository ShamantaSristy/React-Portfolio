import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
// import TheKnot from './components/Projects/ProjectInDetail/TheKnot/TheKnot';
// import NavigationBar from './components/Shared/NavigationBar/NavigationBar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        {/* <Route exact path="/project/knot">
          <TheKnot></TheKnot>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
