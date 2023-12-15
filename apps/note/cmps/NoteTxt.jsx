import { noteService } from "../../note/services/note.service.js";
import { utilService } from "../../../services/util.service.js";
const { useState, useEffect, useRef } = React;

export function NoteTxt({ note, onRemoveNote, onUpdateNote }) {
  // onSaving()
  const noteRef = useRef();

  // function onRemoveNote(note) {
  //     utilService.animateCSS(noteRef.current, 'backOutDown')
  //     noteService.remove(note.id)
  // }

  return (
    <article ref={noteRef} className="note" style={note.style}>
      <h1>{note.info.txt}</h1>
      <button className="delete-btn"
        onClick={() => {
          onRemoveNote(note.id, noteRef.current);
        }}>x</button>
    </article>
  );
}
