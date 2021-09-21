const workouts = {
_listsOfExercises: {
    push: [],
    pull: [],
    legs: [],
    core: [],
    cardio: [],
},

get exercises(){
    return {
        push: this._listsOfExercises.push,
        pull: this._listsOfExercises.pull,
        legs: this._listsOfExercises.legs,
        core: this._listsOfExercises.core,
        cardio: this._listsOfExercises.cardio,
    };
    },

addExerciseToWorkout(workoutName, exerciseName){
    const exercise = {name: exerciseName};
    return this._listsOfExercises[workoutName].push(exercise);
},

getRandomExercise(exerciseName){
const exercises = this._listsOfExercises[exerciseName];
const randomIndex = Math.floor(Math.random()*exercises.length);
return exercises[randomIndex];
},

generateRandomWorkout(){
    const push = this.getRandomExercise('push');
    const pull = this.getRandomExercise('pull');
    const legs = this.getRandomExercise('legs');
    const core = this.getRandomExercise('core');
    const cardio = this.getRandomExercise('cardio');
    return `Your exercises for today are the following: ${push.name}, ${pull.name}, and ${legs.name}. For the core, you'll do ${core.name} and will finish with ${cardio.name}.`;
}


};

workouts.addExerciseToWorkout('push', '3 sets of 20 push ups');
workouts.addExerciseToWorkout('pull', '3 sets of 8 pull ups');
workouts.addExerciseToWorkout('legs', '3 sets of 10 squats');
workouts.addExerciseToWorkout('push', '3 sets of 20 incline bench press at a confortable weight');
workouts.addExerciseToWorkout('pull', '3 sets of 8 bend over rows with the olympic bar at a confortable weight');
workouts.addExerciseToWorkout('legs', '3 sets of 10 walking lunges');
workouts.addExerciseToWorkout('push', '3 sets of 15 dips');
workouts.addExerciseToWorkout('pull', '3 sets of 12 cable pull downs');
workouts.addExerciseToWorkout('legs', '3 sets of 30 jumping jacks');
workouts.addExerciseToWorkout('core', '3 sets of 20 leg raises');
workouts.addExerciseToWorkout('core', '3 sets of 1 minute plank');
workouts.addExerciseToWorkout('core', '3 sets of 20 crunches');
workouts.addExerciseToWorkout('cardio', '30 minutes jogging');
workouts.addExerciseToWorkout('cardio', '40 minutes of stationary bike');
workouts.addExerciseToWorkout('cardio', '20 minutes of rowing machine');

console.log(workouts.generateRandomWorkout());