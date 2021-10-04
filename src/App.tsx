import React from 'react';
import { GlobalStyle } from './globalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter >
          <Switch>
            <Route path="/" exact component={PageOne} />
            <Route path="/pagetwo" exact component={PageTwo} />
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
