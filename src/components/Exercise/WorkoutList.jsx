/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */


import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutList = ({ workouts }) => (
  <ul>
    {workouts.map(workout => (
      <li>
        <Link to={`/workout/${workout.id}`}>
          {workout.name} : {workout.id}
        </Link>
      </li>
    ))}

  </ul>
);

export default WorkoutList;
