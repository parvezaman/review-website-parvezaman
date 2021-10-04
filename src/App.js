// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Alumni from './components/Alumni/Alumni';
import About from './components/About/About';



function App() {
  return (
    <div>
      <Router>
        {/* this should be out of switch  */}
       <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/alumni">
            <Alumni></Alumni>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      
      </Router>
      
    </div>
  );
}

export default App;
