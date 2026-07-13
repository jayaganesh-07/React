import EmployeCard from "./components/EmployeCard"
import StudentCard from "./components/StudentCard"
import Students from "./components/Students";


const App = () => {

  const employe = {Name :" Rahul",

Email : "rahul@gmail.com",

City :" Chennai",

Experience : "3 Years"}


const students = [
  {
    id: 1,
    name: "Arun",
    course: "Angular"
  },
  {
    id: 2,
    name: "Meena",
    course: "Data Science"
  },
  {
    id: 3,
    name: "Vignesh",
    course: "Node.js"
  },
  {
    id: 4,
    name: "Kavya",
    course: "Cyber Security"
  },
  {
    id: 5,
    name: "Naveen",
    course: "Machine Learning"
  }
];
  return (
    <>
    <StudentCard Name = "Sudhan" Age = {25} Course="React" isPlaced={true}/>
    <EmployeCard details={employe}/>
    <Students datas={students}/>
    </>
  )
}

export default App