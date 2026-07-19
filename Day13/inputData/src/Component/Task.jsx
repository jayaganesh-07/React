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
    //Task-3
    //input
    const [employeeNameImput,setEmployeeNameInput]=useState("")
    const [departmentInput,setDepartmentInput]=useState("")
    const [salaryInput,setSalaryInput]=useState("")
    //display
    const [employeName,setEmploye]=useState("")
    const [department,setDepartment]=useState("")
    const [salary,setSalary]=useState("")

    const handleSubmited =()=>{
       setEmploye (employeeNameImput)
       setDepartment(departmentInput)
       setSalary(salaryInput)


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
 <div>
<h1>Task-3</h1>
<p>{employeName}</p>
<p>{department}</p>
<p>{salary}</p>
<input type="text" placeholder="Enter Employe Name" value={employeeNameImput} onChange={(e)=>setEmployeeNameInput(e.target.value)}/> <br /><br />
<input type="text" placeholder="Enter the Department" value={departmentInput} onChange={(e)=>setDepartmentInput(e.target.value)} /> <br /><br />
<input type="text" placeholder="Enter the Salary" value={salaryInput} onChange={(e)=>setSalaryInput(e.target.value)}/> <br /> <br />
<button onClick={handleSubmited}>Click Submit</button>
 </div>
   </>
  )
}

export default Task