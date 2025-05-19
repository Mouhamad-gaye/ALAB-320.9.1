
export default function TodoInput({ newTodo, setNewTodo, dispatch }) {



    return (
        <>
            <div>
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>;
                <button onClick={() => {
                    dispatch({type: "Add", payload: newTodo})
                    setNewTodo("")
                }}>Add Todo</button>
        </div >

        </>
    )
}