import React from 'react';

class WorkoutSummary extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() {
        const { workout } = this.props
        return (
        <div>
            <h3>You Did:</h3>
            <p>{(Object.keys(workout.exercises).map(key =>
        `Exercise: ${key}, Reps: ${workout.exercises[key]} `))}
        </p>
        </div> 
        );
    }
}

export default WorkoutSummary;