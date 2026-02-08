import { use, useState } from 'react'
import Button from '../component/Button'
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

// function App() {
//   const [todos, seTodos] = useState([{
//     title: "go to gym",
//     description: "workout at 7am",
//     completed: false
//   },{
//     title: "go to gym",
//     description: "workout at 10am",
//     completed: true
//   }])

//   return (
//     <div>
//       <Todo title={todos[0].title} description={todos[0].description} completed={todos[0].completed}></Todo>
//       <Todo title={todos[1].title} description={todos[1].description} completed={todos[1].completed}></Todo>
//       {/* {todos.map((todo, index) => (
//         <Todo key={index} title={todo.title} description={todo.description} completed={todo.completed}></Todo>
//       ))} */}
//     </div>
//   )
// }

// function Todo(props){
//   return(
//     <div>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
     
//     </div>
//   )
// }


//this attach Button.jsx with the app file
// function App(){
//   const [count,setcount] = useState(0)
//   return(
//     <>  
//     <Button count={count} setname={setcount} ></Button>
//     <Button count={count} setname={setcount}></Button>
//     <Button count={count} setname={setcount}></Button>
//     <Button count={count} setname={setcount}></Button>
//     </>
//   )
// }


function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="My name is raman" />
    </div>
  )
}

function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return <>
    <button onClick={changeTitle}>Click me to change the title</button>
    <Header title={firstTitle} />
  </>
}

function Header({title}) {
  return <div>
    {title}
  </div>
}


export default App