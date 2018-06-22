import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Header from './Header';
import MoviesList from './MoviesList';
import styles from './styles/app.css';

@withRouter
@observer
class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" component={MoviesList} />
        </Switch>
      </div>
    );
  }
}

export default App;