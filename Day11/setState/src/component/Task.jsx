import React, { useState } from "react";

const Task = () => {
//Task-1
const [heroes,setHeroes]= useState(["Vijay","Ajith","Suriya"])
const changeHero =()=>{
    const updatedHeroes = [...heroes]
    updatedHeroes [1]="SK"
    setHeroes(updatedHeroes)
}

//Task-2
const [fruit,setFruit]=useState(["Apple","Orange","Mango"])
const changeFruit =()=>{
    const updateFruit = [...fruit]
    updateFruit [1] = "Banana"
    setFruit(updateFruit)
}

//Task-3
const [course,setCourse]=useState({Name:"Sudhan",Course:"JS"})
const changeCourse =()=>{
   setCourse({...course,Course:"React"})

}

//Task-4
const [company,setCompany]=useState({Company:"Google",City:"Chennai"})
const changeCompany=()=>{
    setCompany({...company,Company:"Microsoft"})
}

  return (
   <>
   <div className="flex justify-between items-center g-3 ">
    <div className="bg-amber-100 p-5 w-40 rounded-4xl m-5 hover:scale-110 transition duration-300"   >
<h2 className="font-bold">Task-1</h2>
<h1>{heroes.map((e)=>(<h1>{e}</h1>))}</h1>

<button className="rounded bg-amber-600 w-24 text-white hover:scale-110 transition duration-300" onClick={changeHero}>Change Hero</button>
   </div>


   <div className="bg-blue-300 p-5 w-40 rounded-4xl m-5 hover:scale-110 transition duration-300" >
<h1 className="font-bold">Task-2</h1>
<h1>{fruit.map((e)=>(<h1>{e}</h1>))}</h1>
<button className="rounded bg-blue-950 w-24 text-white" onClick={changeFruit}>Update Fruit</button>

   </div>
   <div className="bg-emerald-300 p-5 w-40 rounded-4xl m-5 hover:scale-110 transition duration-300" >
    <h1 className="font-bold">Task-3</h1>
    <p>Name:{course.Name}</p>
    <p>Course:{course.Course}</p>
    <button className="rounded bg-emerald-950 w-24 text-white" onClick={changeCourse} >Updated Course</button>
   </div>

   <div  className="bg-lime-200 p-5 w-40 rounded-4xl m-5 hover:scale-110 transition duration-300" >
    <h1 className="font-bold">Task-4</h1>
    <p>Company:{company.Company}</p>
     <p>City:{company.City}</p>
     <button className="rounded bg-mauve-800 w-24 text-white"  onClick={changeCompany} >Updated Company</button>
   </div>
   </div>
   
   </>
  )
}

export default Task