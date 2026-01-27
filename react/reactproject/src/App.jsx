import { use, useState } from 'react'
// default normal

// const App = () => {
//   const [count, setcount]= useState(0)
  
//   return (
//     <div>
//       <CustomButton count = {count} setcount={setcount}></CustomButton>
//     </div>
//   )
// }

//component
// function CustomButton(props){
//   function onClickHandler(){
//     props.setcount(props.count + 1)
//   }
//   return(
//     <button onClick={onClickHandler}>count = {props.count}</button>
//   )
// }

function App() {
  const [todos, seTodos] = useState([{
    title: "go to gym",
    description: "workout at 7am",
    completed: false
  },{
    title: "go to gym",
    description: "workout at 10am",
    completed: true
  }])
}

export default App