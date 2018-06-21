import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import Header from './Header';
import MoviesList from './MoviesList';

@withRouter
@observer
export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/=" component={MoviesList} />
        </Switch>
      </div>
    );
  }
}