/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */

import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ExerciseContainer from './components/Exercise/ExerciseContainer';
import WorkoutGraph from './components/WorkoutGraphs';
import WorkoutHistory from './components/WorkoutHistory';
import Welcome from './components/Welcome';
import './Dashboard.css';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="navbar-contents">
            <NavLink exact to="/" className="navbar-links">Home</NavLink>
            <NavLink to="/workout" className="navbar-links">Workout</NavLink>
            <NavLink to="/history" className="navbar-links">History</NavLink>
            <NavLink to="/charts" className="navbar-links">Charts</NavLink>
          </div>
          <div className="componentDisplay">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/workout" component={props => <ExerciseContainer {...props} />} />
              <Route path="/history" component={WorkoutHistory} />
              <Route path="/charts" component={WorkoutGraph} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
