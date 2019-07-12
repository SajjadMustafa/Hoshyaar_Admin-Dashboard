/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AllSchool from 'containers/AllSchool/Loadable';
import AllReports from 'containers/AllReport/Loadable';
import DashBoard from 'containers/DashBoard/Loadable';

// import GlobalStyle from '../../backup/global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/allreports" component={AllReports} />
        <Route exact path="/allschool" component={AllSchool} />
        <Route exact path="/" component={DashBoard} />
      </Switch>
      {/* <GlobalStyle /> */}
    </div>
  );
}
