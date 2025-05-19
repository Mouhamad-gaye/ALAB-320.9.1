export default function TodoItems({ todos, editId, editText, setEditId, setEditText, dispatch }) {
    return (

        <>
            <li>
                <input text="text" value={editText} onChange={(e) => setEditText(e.target.value)}>
                <button onClick={() => {
                        dispatch({ type: "Edit", payload: { id: todos.id, task: editText } })
                        setEditId(null)
                        setEditText("")
                }}>Save</button>
                </input>
                <input type="checkbox" checked={todos.completed} onChange={() => dispatch({ type: "Toggle", payload: todos.id })}></input>
                <button onClick={() => {
                    setEditId(todos.id)
                    setEditText(todos.task)
                }}>Edit</button>
                <button onClick={() => dispatch({ type: "Delete", payload: todos.id })}>Delete</button>
            </li>

        </>
    )
}

