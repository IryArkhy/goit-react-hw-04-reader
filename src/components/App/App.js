import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Reader from '../Reader';
import publications from '../../publications.json';
import '../../styles.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/reader"
            /* eslint-disable-next-line */
            component={props => <Reader {...props} items={publications} />}
          />
          <Redirect
            to={{
              pathname: '/reader',
              search: '?item=1',
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
