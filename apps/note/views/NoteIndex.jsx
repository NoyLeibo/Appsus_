// import { NoteHeader } from "../cmps/NoteHeader.jsx";
import { NoteToolBar } from "../cmps/NoteToolBar.jsx";
import { noteService } from "../services/note.service.js";
import { NotesList } from "../cmps/NotesList.jsx";
import { SetNoteTxt } from "../cmps/SetNoteTxt.jsx";
import { SetNoteImg } from "../cmps/SetNoteImg.jsx";
import { SetNoteTodos } from "../cmps/SetNoteTodos.jsx";
import { utilService } from "../../../services/util.service.js";

const { useState, useEffect } = React;
const NOTE_KEY = "noteDB";

export function NoteIndex() {
  const [notes, setNotes] = useState(null);
  const [typeOfInput, setTypeOfInput] = useState("NoteTodos"); // NoteTxt / NoteImg // NoteTodos

  useEffect(() => {
    // כל פעם שעולה תשמור לי את הnotes
    loadNotes();
  }, []);

  function loadNotes() {
    // טוען את כל ה Notes שיש בדאטה
    noteService
      .query()
      .then((notes) => {
        setNotes(notes);
      })
      .catch((err) => console.log("err:", err));
  }

  function onAddNote(note) {
    noteService.save(note).then((note) => {
      setNotes((prevNotes) => [...prevNotes, note]);
    });
  }

  function onUpdateNote(note) {
    noteService.save(note).then((note) => {
      setNotes((prevNotes) =>
        prevNotes.map((n) => (n.id === note.id ? note : n))
      );
    });
  }

  function onPinNote(note){
    note.isPinned = !note.isPinned
    console.log(note.isPinned);
    onUpdateNote(note)

  }

  function onRemoveNote(noteId, ref) {
    utilService.animateCSS(ref, "backOutDown");
    noteService.remove(noteId).then(() => {
      setNotes((prevNotes) => prevNotes.filter((n) => n.id !== noteId));
    });
  }

  const handleChangeType = (newType) => {
    setTypeOfInput(newType);
  };

  if (!notes) return <div>Loading...</div>;
  return (
    <section className="flex">
      <div className="note-container">
        <NoteToolBar /> {/*Show all the left bar*/}
      </div>
      <section>
        <div className="add-note">
          {typeOfInput === "NoteTxt" && (
            <SetNoteTxt onChangeType={handleChangeType} onAddNote={onAddNote} />
          )}
          {typeOfInput === "NoteImg" && (
            <SetNoteImg onChangeType={handleChangeType} onAddNote={onAddNote} />
          )}
          {typeOfInput === "NoteTodos" && (
            <SetNoteTodos onChangeType={handleChangeType} onAddNote={onAddNote} />
          )}
        </div>
        <NotesList // רנדור של כל הNOTES
          notes={notes}
          onUpdateNote={onUpdateNote}
          onRemoveNote={onRemoveNote}
          onPinNote={onPinNote}
        />
      </section>
    </section>
  );
}
