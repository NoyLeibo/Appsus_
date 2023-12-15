const { useRef } = React;


export function NoteImg({ note, onRemoveNote}) {
    const noteRef = useRef();

    return(
        <article ref={noteRef} className="note note-img" style={note.style}>
            <img src={note.info.url}></img>
            <h1>{note.info.title}</h1>
            <button className="delete-btn"
            onClick={() => {
            onRemoveNote(note.id, noteRef.current);
            }}>x</button>
        </article>
    )
}