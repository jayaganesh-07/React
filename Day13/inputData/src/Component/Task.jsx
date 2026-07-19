import { useState } from "react"


const Task = () => {

    //Task-1
    const [inputValue,setInputvalue]=useState("")
    const [userName,setUserName]=useState("")
    const handleChange = (e)=>{
        setInputvalue(e.target.value)
    }
    const handleClick = ()=>{
        setUserName(inputValue)
    }

    //Task-2
    //get input to user
    const [nameImput,setNameInput]=useState("")
    const [courseInput,setCourseInput]=useState("")
    //display the input
    const [studentName,setStudentName]=useState("")
    const [course,setCourse]=useState("")

    const handleSubmit =()=>{
        setStudentName(nameImput)
        setCourse(courseInput)
    }
    
  return (
   <>
   <div>
<h1>Task-1</h1>
<h1>{userName}</h1>
<input type="text" placeholder="Enter Name" value={inputValue} onChange={handleChange}/>
<button  onClick={handleClick}>Click Submit</button>
 </div>

 <div>
    <h1>Task-2</h1>
    <h1>Student Name ={studentName}</h1>
    <h1>Course ={course}</h1>
    <input type="text" placeholder="Student Name" value={nameImput} onChange={(e)=> setNameInput(e.target.value)} /> <br /><br />
    <input type="text" placeholder="Course " value={courseInput} onChange={(e)=>setCourseInput(e.target.value)} /> <br /><br />
    <button onClick={handleSubmit} >Click Submit</button>
 </div>
   </>
  )
}

export default Task