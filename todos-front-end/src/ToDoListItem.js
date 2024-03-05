export const ToDoListItem = ({ todo, onClickComplete, onClickDelete }) => {
    return (
        <div>
            <h3>{todo.text}</h3>
            {todo.isComplete && <p>Complete!</p>}
            <button onclick={() => onClickComplete(todo.id)}>Mark As Completed</button>
            <button onClick={() => onClickDelete(todo.id)}>Delete</button>
        </div>
    )
}