const { useRef } = React;

export function NoteTodos({ note, onRemoveNote}) { // מחזירה קבצי Todo
  const noteRef = useRef();

    return (
      <article ref={noteRef} className="note">
        <h1>{note.info.title}:</h1>
        <ul className="todo-list">
          {note.info.todos.map((todo, index) => (
            <li key={`${todo.id} + ${index}`}>
              {todo.txt}
            </li>
          ))}
        </ul>
        <button className="delete-btn"
            onClick={() => {
            onRemoveNote(note.id, noteRef.current);
            }}>x</button>
      </article>
    );
  }