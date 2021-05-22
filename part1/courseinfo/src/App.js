import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  );
}

const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part part={props.part1[0].name} exercises={props.exercises1[0].exercises} />
      <Part part={props.part2[1].name} exercises={props.exercises2[1].exercises} />
      <Part part={props.part3[2].name} exercises={props.exercises3[2].exercises} />
    </>
  );
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1[0].exercises + props.exercises2[1].exercises + props.exercises3[2].exercises} </p>
    </>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
    {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.part} exercises1={course.part}
               part2={course.part} exercises2={course.part} 
               part3={course.part} exercises3={course.part} />
      <Total exercises1={course.part} exercises2={course.part} exercises3={course.part} />
    </div>
  );
}

export default App
