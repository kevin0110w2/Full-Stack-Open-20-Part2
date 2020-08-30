import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course, sum }) => {
  const total = course.parts.reduce(
    (accumulator, runningTotal) => {
    return (accumulator + runningTotal.exercises)
  }, 0)

  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map(course => <p key={course.id}>{course.name} {course.exercises} </p>)}
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}


  export default Course 