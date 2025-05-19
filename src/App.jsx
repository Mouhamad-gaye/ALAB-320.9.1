import './App.css'
import { useState, useReducer } from 'react'
import TodoItems from './components/TodoItems';
import AddInput from './components/AddInput';


//Define the todoList
const initialList = [
  { id: 1, task: "Exercise for 30 minutes", completed: false },
  { id: 2, task: "Read a chapter of a book", completed: false },
  { id: 3, task: "Meditate for 10 minutes", completed: false },
  { id: 4, task: "Try a new creative hobby", completed: false },
  { id: 5, task: "Experiment with a new coffee recipe", completed: false },
  { id: 6, task: "Write a summary of today’s work", completed: false },
  { id: 7, task: "Review project notes", completed: false },
  { id: 8, task: "Learn a new coding concept", completed: false },
  { id: 9, task: "Plan tasks for tomorrow", completed: false },
  { id: 10, task: "Listen to an informative podcast", completed: false },
  { id: 11, task: "Grocery shopping", completed: false },
  { id: 12, task: "Clean the kitchen", completed: false },
  { id: 13, task: "Do laundry", completed: false },
  { id: 14, task: "Check car maintenance", completed: false },
  { id: 15, task: "Organize your workspace", completed: false },
  { id: 16, task: "Call or text a friend", completed: false },
  { id: 17, task: "Try a new recipe", completed: false },
  { id: 18, task: "Play a relaxing game", completed: false },
  { id: 19, task: "Reply to pending emails/messages", completed: false },
  { id: 20, task: "Spend time outdoors", completed: false },
]

//create reducer function
function reducer(state, action) {
  switch (action.type) {
    case "Toggle":
      return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
    case "Delete":
      return state.filter(todo => todo.id !== action.payload)
    case "Edit":
      return state.map(todo => todo.id === action.payload.id ? { ...todo, task: action.payload.task } : todo);
    case "Add":
      return [...state, { id: Date.now(), task: action.payload, completed: false }];
    default:
      return state;
  }

}

function App() {
  //this is the useReducer initializer
  const [todos, dispatch] = useReducer(reducer, initialList)
  //this useState stores input text for adding new todos
  const [newTodo, setNewTodo] = useState("");
  //this use State tracks the id which can not be edited (null)
  const [editId, setEditId] = useState(null);
  //this useState holds temp text while editing
  const [editText, setEditText] = useState("");





  return (
    <>
      <h1> Todo List</h1>
      <AddInput newTodo={newTodo} setNewTodo={setNewTodo} dispatch={dispatch} />
      <ul>
        {todos.map(todo => (
          <TodoItems key={todo.id} todo={todo} editId={editId} editText={editText} setEditId={setEditId} setEditText={setEditText} dispatch={dispatch} />
        ))}
      </ul>




    </>
  )
}

export default App



// {/* <div>
// <h1>Todo List</h1>

// {/* Add New Todo */}
// <input
//     type="text"
//     value={newTodo}
//     onChange={(e) => setNewTodo(e.target.value)}
// />
// <button onClick={() => {
//     dispatch({ type: "Add", payload: newTodo });
//     setNewTodo("");
// }}>Add Todo</button>

// <ul>
//     {todos.map(todo => (
//         <li key={todo.id} style={{listStyle:'none'}}>
//             {editId === todo.id ? (
//                 <>
//                     <input
//                         type="text"
//                         value={editText}
//                         onChange={(e) => setEditText(e.target.value)}
//                     />
//                     <button onClick={() => {
//                         dispatch({ type: "Edit", payload: { id: todo.id, task: editText } });
//                         setEditId(null);
//                         setEditText("");
//                     }}>Save</button>
//                 </>
//             ) :
//             (
//                 <>
//                     <input
//                         type="checkbox"
//                         checked={todo.completed}
//                         onChange={() => dispatch({ type: "Toggle", payload: todo.id })}
//                     />
//                     <span>{todo.task}</span>
//                     <button onClick={() => {
//                         setEditId(todo.id);
//                         setEditText(todo.task);
//                     }}>Edit</button>
//                     <button onClick={() => dispatch({ type: "Delete", payload: todo.id })} disabled={!todo.completed}>
//                         Delete
//                     </button>
//                 </>
//             )}
//         </li>
//     ))}
// </ul>
// </div> */}
