import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Main from './containers/Main';
import Layout from './layouts/Layout';
import Reviews from './screens/Reviews';

function App() {
  const [reviews, setReviews] = useState([])

  return (
    <Layout>
      <Switch>

        <Route path='/reviews'>
          {/* Review Screen */}
          <h3> Reviews </h3>
          <Reviews />
        </Route>

        <Route path='/yogurts'>
          {/* Order Screen */}
          <h3>Yogurts</h3>
        </Route>

        <Route path='/'>
          {/* Home Container */}
          <Main />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
