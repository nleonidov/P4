import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Main from './containers/Main';
import Layout from './layouts/Layout';
import Yogurts from './screens/Yogurts';
import { getAllYogurts } from './services/yogurts';


function App() {
  const [reviews, setReviews] = useState([])
  const [flavors, setFlavors] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [yogurts, setYogurts] = useState([]);

  useEffect(() => {
    const fetchYogurts = async () => {
      const yogurtData = await getAllYogurts();
      setYogurts(yogurtData)
    }
    fetchYogurts();
}, [])

  return (
    <Layout>
      <Switch>

        <Route path='/yogurts'>
          {/* Order Screen */}
          <Yogurts yogurts={yogurts} flavors={flavors} toppings={toppings} />
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
