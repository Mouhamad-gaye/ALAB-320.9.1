
export default function AddInput({ newTodo, setNewTodo, dispatch }) {



    return (
        <>
            <div>
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button onClick={() => {
                    dispatch({ type: "Add", payload: newTodo })
                    setNewTodo("")
                }}>Add Todo</button>
            </div >

        </>
    )
}