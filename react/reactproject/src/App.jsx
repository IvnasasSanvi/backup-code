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

  return (
    <div>
      {/* <Todo title={todos[0].title} description={todos[0].description} completed={todos[0].completed}></Todo>
      <Todo title={todos[1].title} description={todos[1].description} completed={todos[1].completed}></Todo> */}
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} completed={todo.completed}></Todo>
      ))}
    </div>
  )
}

function Todo(props){
  return(
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
     
    </div>
  )
}

export default App