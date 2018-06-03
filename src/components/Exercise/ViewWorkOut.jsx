/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */

import React from 'react';
import { withRouter, Link, Route, Switch } from 'react-router-dom';
import ExerciseContainer from './ExerciseContainer';
import LogWorkout from './LogWorkout';

class ViewWorkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      performWorkout: false
    }
  }

  handleBack = (e) => {
    e.preventDefault
    this.props.history.goBack()

  }

  performButtonClicked = (e) => {
    this.setState({
      performWorkout: true
    })
    console.log(this.state.performWorkout)
    console.log('perform button clicked')
    // this.props.history.push('/logworkout');
    
  }

  render() {
    console.log(this.props)
    const { workout } = this.props;
    return (
      <div>
        <p>{workout.name}</p>
        <p>{(Object.keys(workout.exercises).map(key =>
        `${key} : ${workout.exercises[key]} `))}
        </p>
        <Link to={`/workout/logworkout/${workout.id}`}>
        <button onClick={this.performButtonClicked}>Perform?</button>
        </Link>
        <button onClick={this.handleBack}>Back</button>
      </div>
    );
  }
}

export default withRouter(ViewWorkout);
