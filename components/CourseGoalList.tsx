import * as React from 'react';
import './CourseGoalList.css';
import CourseGoalItem from './CourseGoalItem';

const CourseGoalList = (props) =>{

  return(
<ul className="goal-list">
  {
    props.items.map(goal => 
      (
      <CourseGoalItem key = {goal.id} id={goal.id}> {goal.text} 
      </CourseGoalItem>
    ))}
  
</ul>

  );
}
export default CourseGoalList;