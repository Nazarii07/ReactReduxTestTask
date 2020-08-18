import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from "components/layout"
import HomeBlog from 'components/news';
import ArticlePage from 'components/newsDetails';

import './app.css';
import Admin from 'components/admin';
import EditNews from 'components/news/editNews';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={HomeBlog} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/edit/:id' component={EditNews} />
        <Route exact path='/add' component={EditNews} />
        <Route exact path='/:id' component={ArticlePage} />
      </Switch>
    </Layout>
  );
}

export default App;
