import { ToDoListItem } from './ToDoListItem';

export const ToDoList = ({ todos, onCompleteTodo, onDeleteTodo }) => {
    return (
        <div>
            {todos.map( todo => (
                <ToDoListItem
                key={todo.id}
                todo={todo}
                onClickComplete={onCompleteTodo}
                onClickDelete={onDeleteTodo} />
            ))}
        </div>
    )
}