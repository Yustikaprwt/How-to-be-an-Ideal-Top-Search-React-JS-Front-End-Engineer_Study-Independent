import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import AboutApp from './pages/AboutApp';
import AboutAuthor from './pages/AboutAuthor';
import NotFound from './pages/NotFound'


function App(props) {
  return (
    <Router>
        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About} />
          <Route path="/about/about-app" exact component={AboutApp} />
          <Route path="/about/about-author" exact component={AboutAuthor} />
          <Route component={NotFound} />
        </Routes>
    </Router>
  );
}

export default App;