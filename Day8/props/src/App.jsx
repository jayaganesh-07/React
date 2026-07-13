import EmployeCard from "./components/EmployeCard"
import StudentCard from "./components/StudentCard"
import StudentList from "./components/StudentList";


const App = () => {

  const employe = {
  Name: "Rahul",
  Email: "rahul@gmail.com",
  City: "Chennai",
  Experience: "3 Years",
};


  const students = [
  {
    id: 1,
    name: "Sudhan",
    course: "React"
  },
  {
    id: 2,
    name: "Abinaya",
    course: "Java"
  },
  {
    id: 3,
    name: "Rahul",
    course: "Python"
  },
  {
    id: 4,
    name: "Priya",
    course: "UI/UX"
  },
  {
    id: 5,
    name: "Karthik",
    course: "Full Stack"
  }
];

  return (
    <>
    <StudentCard Name = "Sudhan" Age = {25} Course="React" isPlaced={true}/>
    <EmployeCard details={employe}/>
    <StudentList data={students}/>
    </>
  )
}

export default App