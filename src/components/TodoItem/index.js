// Write your code here
const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem

  const deleteTodoItem = () => {
    deleteTodo(id)
  }
  return (
    <li className="todos-item-con">
      <p className="todo-title">{title}</p>
      <button className="todos-button" type="button" onClick={deleteTodoItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
