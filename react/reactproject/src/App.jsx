//import { useState } from 'react'
//import Button from '../component/Button'
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


// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="My name is raman" />
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random())
//   }

//   return <>
//     <button onClick={changeTitle}>Click me to change the title</button>
//     <Header title={firstTitle} />
//   </>
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }
// let counter = 4;
// function App(){
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: "go to gym",
//     description: "go to gym today"
//   },{
//     id: 2,
//     title: "eat healthy",
//     description: "eat healthy food"
//   },{
//     id: 3,
//     title: "study well",
//     description: "study well"
//   }])

//   function addTodo(){
//     setTodos([...todos,{
//       id: counter++,
//       title: Math.random(),
//       description: Math.random()
//     }])
    // const newTodos=[];
    // for(let i=0; i<todos.length;i++){
    //   newTodos.push(todos[i])
    // }
    //newTodos == todos
    // newTodos.push({
    //   id: 4,
    //   title: Math.random(),
    //   description: Math.random()
    // })
    // existing one +1
    //setTodos(newTodos)
//  }

//   return(
//     <div> 
//       <button onClick={addTodo}>Add a Todo</button>
//       {todos.map(todo=> <Todo title={todo.title} description={todo.description}/>)}
//       {/* {todos.map(function(todo){
//         return <Todo title={todo.title} description={todo.description} />
//       })}
//       <Todo title={todos[0].title} description={todos[0].description} />
//       <Todo title={todos[1].title} description={todos[1].description} />
//       <Todo title={todos[2].title} description={todos[2].description} /> */}

//     </div>
//   )
// }

// function Todo({title, description}){
//   return <div>
//     <h1>{title}</h1>
//     <h2>{description}</h2>
//   </div>
// }

// real wrapper
function App(){
  return(
  <div>
    <CardWrapper>
      <div>
        hi there
      </div>
    </CardWrapper>
    <CardWrapper>
      <div>
        hello there
      </div>
    </CardWrapper>
  </div>
)}

function CardWrapper({children}){
  // create a div which has a border (hint: the way to create a border is border:"2px solid black")
  //and inside the div , renders the prop
  return <div style={{border: "2px solid black", padding: 20}}>
    {children}
  </div>
}


export default App