import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './Pages/NoMatch';
import Home from './Pages/Home';

const App = () => (
 <Router>
 <div>
   {/* <Nav /> */}
   <Switch>
    {/* things nested under switch are the interactive parts that will transform when route changes */}
    <Route exact path="/" component={Home} />
    <Route component={NoMatch} />

    </Switch>
  </div>
 </Router>
);

export default App;
