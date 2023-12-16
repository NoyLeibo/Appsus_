const { useRef } = React;

export function NoteImg({ note, onRemoveNote, onPinNote }) {
  const noteRef = useRef();

  return (
    <article ref={noteRef} className="note note-img" style={note.style}>
      <img src={note.info.url}></img>
      <h1>{note.info.title}</h1>
      <div className="flex">
        <button
          className="delete-btn"
          onClick={() => {
            onRemoveNote(note.id, noteRef.current);
          }}
        >
          x
        </button>
        <button
          className="delete-btn"
          onClick={() => {
          onPinNote(note);
          }}
        >{(note.isPinned) ? <i class="fa-solid fa-link-slash fa-lg"></i> : <i class="fa-solid fa-syringe fa-lg"></i> }
        </button>
      </div>
    </article>
  );
}
