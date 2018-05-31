const workouts = [{ id: 1, name: '5 x 5', exercises: { squats: 20, bench: 5 } },
  { id: 2, name: 'Madcow', exercises: { bench: 5, deadlift: 10 } },
  { id: 3, name: 'Boring But Big', exercises: { squats: 6, press: 5 } },
];

const getAllWorkouts = () => workouts;

const getOneWorkout = id => workouts.find(workout => workout.id === id);

export default {
  getAllWorkouts,
  getOneWorkout,
};
