// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
       <Header></Header>
        <Switch>
          <Route path="/home">

          </Route>
          <Route exact path="/home">

          </Route>
          <Route path="/services">

          </Route>
          <Route path="/alumni">

          </Route>
          <Route path="/about">

          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      
      </Router>
      
    </div>
  );
}

export default App;
