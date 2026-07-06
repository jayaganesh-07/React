import './App.css'
import Banner from './Reactproject/Banner'




const App =()=>{
  return(
    <>
    <div className="parent">
      <img src="./public/favicon.svg" alt="" />
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Login</a>
    </div>
    <Banner/>
    </>
  )
}
export default App