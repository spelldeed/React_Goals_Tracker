import * as React from 'react';
import TodoForm from './components/TodoForm';
import { useState } from 'react';
import './style.css';
import CourseGoalList from './components/CourseGoalList';
import './App.css';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoals = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const UpdateGoals = [...prevGoals];
      UpdateGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return UpdateGoals;
    });
  };

  let context = <p>No Goals Added... Let's Add one! </p>;
console.log(courseGoals);
  if (courseGoals.length > 0) {
    context = <CourseGoalList items={courseGoals} />;
    
  }
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <section id="goal-form">
        <TodoForm onAddGoals={addGoals} />
      </section>
      <section>{context}</section>
    </div>
  );
}
