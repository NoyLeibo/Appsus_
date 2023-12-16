import { noteService } from "../services/note.service.js";

const { useRef, useState } = React;

export function NoteTodos({ note, onRemoveNote, onPinNote }) {
  const [render, setRender] = useState(false);
  const noteRef = useRef();

  function handleTaskToggle(note, index){
    console.log(note.info.todos[index]);
    note.info.todos[index].isDone = !note.info.todos[index].isDone
    note.info.todos[index].doneAt = new Date()
    noteService.save(note)
    setRender(!render)
  }

  return (
    <article ref={noteRef} className="note">
      <h1>{note.info.title}:</h1>
      <ul className="todo-list">
        {note.info.todos.map((todo, index) => (
          <li 
          key={`${note.id}_${todo.id}_${index}`}
          style={{
            textDecoration: note.info.todos[index].isDone ? 'line-through' : 'none',
          }}>
            <input
              type="checkbox"
              id={`isDoneButton_${note.id}_${index}`}
              name={`isDoneButton_${index}`} 
              value={todo.id}
              onChange={() => handleTaskToggle(note, index)}
              checked={note.info.todos[index].isDone}
            />
            <label htmlFor={`isDoneButton_${note.id}_${index}`}>
              <span>{todo.txt}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="flex">
        <button className="delete-btn"
          onClick={() => {
            onRemoveNote(note.id, noteRef.current);
          }}>x</button>
        <button className="delete-btn" 
          onClick={() => {
            onPinNote(note);
        }}>{(note.isPinned) ? <i class="fa-solid fa-link-slash fa-lg"></i> : <i class="fa-solid fa-syringe fa-lg"></i> }</button>
      </div>
    </article>
  );
}