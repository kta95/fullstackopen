import React from "react"

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

const Part = ({name, exercise}) => {
  return (
    <>
      <p>{name} {exercise}</p>
    </>
  );
}

const Content = ({course}) => {
  return (
    <>
    <h3>{course.name}</h3>
    {course.parts.map(part =>
      <Part key={part.id} name={part.name} exercise={part.exercises} />
    )}
    
      
    </>
  );
}

const Total = ({parts}) => {
  console.log('parts', parts)
  return (
    <strong>Total of {parts.reduce((total, part) => total + part.exercises, 0)} exercises</strong>
  )
}

const Course = ({courses}) => {
  return (
    <>
      {courses.map(course => 
          <>
            <Content course={course} />
            <Total parts={course.parts} />
          </>
        
      )}
    </>
  )
}
const Courses = ({courses}) => {
  return (
    <div>
      <Header course={'Web development curriculum'} />
      <Course courses={courses} />
    </div>
  );
}
export default Courses