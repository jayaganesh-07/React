import React from 'react'
import Object from './Object'

const App = () => {
const arr = [1,2,3,4,5,6]

//Task-1
const course = "React JS"
//Task-2
const price = 50000
let discount = 5000
//Task-3
const isLogin = true
//Task-4
const profileImage = null
//Task-5
const email = undefined
//Task-6

//Task-7
const hero = ["Vijay","Ajith","Suriya","SK","Dhanush"]
//Task-8
  const student = {
    name: "Jaya Ganesh",
    course: "React JS",
    experience: "1 Year",
  };



  return (
    <>
    <h1>{arr}</h1>
    <div>
      <ol>
        {arr.map((e,i)=>(
            <li key={i}>{e}</li>
        ))}
      </ol>
     
    </div>
    <div>
       <p>{arr.filter ((e)=>e%2===0)}</p>
    </div>
    <div>
       <p>{arr.find ((e)=>2)}</p>
    </div>
    <Object/>
   
    <div>
 <h1>Task-1</h1>
  <h1>{course}</h1>
    </div>

<div>
  <h1>Task-2</h1>
  <h1>{price}</h1>
  <h1>{discount}</h1>

</div>

<div>
  <h1>Task-3</h1>
  <h1>{isLogin? "Welcome User":"Please Login"}</h1>
</div>

<div>
  <h1>Task-4</h1>
  <h1>{profileImage ?? <p>No Image Found</p>}</h1>
</div>

<div>
  <h1>Task-5</h1>
  <h1>{email ?? <p>Email Not Available</p> }</h1>
</div>

<div>
  <h1>Task-6</h1>

</div>
<div>
  <h1>Task-7  </h1>
  <h1>{hero}</h1>
  
   
        {hero.map((e,i)=>(
            <li key={i}>{e}</li>
        ))}
     
     
   
</div>


  
      <div>
      <h1>Task-8</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        
        }}
      >
        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            width: "250px",
            borderRadius: "10px",
            boxShadow: "0 0 10px lightgray",
          }}
        >
          <h2>Student Details</h2>
          <p><b>Name:</b> {student.name}</p>
          <p><b>Course:</b> {student.course}</p>
          <p><b>Experience:</b> {student.experience}</p>
        </div>
      </div>
    </div>


   
    
   
  




    </>
  )
}

export default App