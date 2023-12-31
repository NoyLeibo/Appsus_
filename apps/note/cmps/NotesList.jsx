import { NotePreview } from "./NotePreview.jsx";


export function NotesList({ notes, onAddNote, onRemoveNote , onUpdateNote, onPinNote}) {
  return (
    <ul className="note-list">
        {notes.map(note =>
            <li className="note-preview-wrapper" key={note.id}>
                <NotePreview note={note} onAddNote={onAddNote} onRemoveNote={onRemoveNote} onUpdateNote={onUpdateNote} onPinNote={onPinNote} />
            </li>
        )}
    </ul>
  );
}
