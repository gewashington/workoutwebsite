//Make workout api to get list of workouts
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WorkoutList from './WorkoutList';
import ViewWorkout from './ViewWorkOut';
import LogWorkout from './LogWorkout';
import workoutAPI from './workoutAPI';

//
// var WorkoutCards = React.createClass({
//
// })

export default class ExerciseContainer extends React.Component {
  constructor(props) {
    super(props);
 

};


  renderWorkoutList = () => {
    const  workouts  = workoutAPI.getAllWorkouts();
    return <WorkoutList workouts={workouts} />;
  };

  renderViewWorkout = (props) => {
    const { id } = props.match.params;
    const workout = workoutAPI.getOneWorkout(Number(id));
  
    console.log('id:', id)
    console.log('workout:', workout)
 
    if (!workout) {
      return <div>Could not find workout!</div>
    }
    else {
      return <ViewWorkout workout={workout} onClick={this.renderLogWorkout} />
    }
  };

  renderLogWorkout = (props) => {
 const { id } = props.match.params
    const workout = workoutAPI.getOneWorkout(Number(id));
      if (!workout) {
        return <div>Could not log workout!</div>
      }
      else {
        return <LogWorkout workout={workout} /> 
      }
  };

  renderWorkoutSummary() {

  };



  render() {
    // let tempData = [ "5 x 5", "Madcow", "Boring But Big"]
    return (
      <div>
        <Switch>
          <Route exact path="/workout" render={this.renderWorkoutList} />
          <Route exact path="/workout/logworkout/:id" render={this.renderLogWorkout} />
          <Route path="/workout/:id" render={this.renderViewWorkout} />
        </Switch>
      </div>
    );
  }
}
