import { noteService } from "../../note/services/note.service.js";
import { utilService } from "../../../services/util.service.js";
const { useState, useEffect, useRef } = React;

export function NoteTxt({ note, onRemoveNote, onPinNote }) {
  const noteRef = useRef();

  return (
    <article ref={noteRef} className="note" style={note.style}>
      <h1>{note.info.txt}</h1>
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
