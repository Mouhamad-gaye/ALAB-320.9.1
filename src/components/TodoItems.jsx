export default function TodoItems({ todo, editId, editText, setEditId, setEditText, dispatch }) {
    return (

        <>
            <li style={{ listStyle: "none" }}>
                <input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: "Toggle", payload: todo.id })} />

                <input text="text" value={editText} onChange={(e) => setEditText(e.target.value)} />

                <button onClick={() => {
                    dispatch({ type: "Edit", payload: { id: todo.id, task: editText } })
                    setEditId(null)
                    setEditText("")
                }}>Save</button>


                <button onClick={() => {
                    setEditId(todo.id)
                    setEditText(todo.task)
                }}>Edit</button>
                
                <button onClick={() => dispatch({ type: "Delete", payload: todo.id })}>Delete</button>
            </li>

        </>
    )
}

