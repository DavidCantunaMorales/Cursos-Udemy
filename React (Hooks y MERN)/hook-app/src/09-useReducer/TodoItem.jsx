export const TodoItem = ({
  id,
  description,
  done = false,
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <li>
      <span onClick={() => onToggleTodo(id)}>{description}</span>
      <br />
      <span>{done ? 'Completado' : 'Incompleto'}</span>
      <button onClick={() => onDeleteTodo(id)}>Borrar</button>
    </li>
  );
};
