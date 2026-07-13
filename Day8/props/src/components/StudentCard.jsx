import React from 'react'

const StudentCard = ({Name , Age , Course, isPlaced}) => {
  return (
   <>
   <h2>Task-1</h2>
   <h2>name : {Name}</h2>
   <h2>age : {Age}</h2>
   <h2>course : {Course}</h2>
   <h2>status : {isPlaced ? "Placed" : "Not Placed"}</h2>
   
   </>
  )
}

export default StudentCard