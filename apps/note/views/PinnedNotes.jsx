import { NotePreview } from "./NotePreview.jsx";
import { noteService } from "../services/note.service.js";
import { utilService } from "../../../services/util.service.js";
import { NoteToolBar } from "../cmps/NoteToolBar.jsx";


const { useState, useEffect } = React;

export function PinnedNotes(){
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        loadNotes();
      }, []);

    function loadNotes() {
    noteService.query()
        .then((notes) => {
        setNotes(notes);
        })
        .catch((err) => console.log("err:", err));
    }

    function onPinNote(note) {
        note.isPinned = !note.isPinned;
        setNotes((prevNotes) => {
          const updatedNotes = prevNotes
            .map((n) => (n.id === note.id ? note : n))
            .sort((a, b) => (b.isPinned ? 1 : a.isPinned ? -1 : 0));
            noteService.save(updatedNotes[0]).then((updatedNote) => {
            setNotes(updatedNotes);
          });
        });
      }
      
    
      function onRemoveNote(noteId, ref) {
        utilService.animateCSS(ref, "backOutDown");
        noteService.remove(noteId).then(() => {
          setNotes((prevNotes) => prevNotes.filter((n) => n.id !== noteId));
        });
      }
    
    if (!notes) return <div>Loading...</div>;
    return (
        <section className="flex">
        <div className="note-container">
        <NoteToolBar />
        </div>
        <ul className="note-list">
            {notes.map((note) =>
                note.isPinned ? (
                    <li className="note-preview-wrapper" key={note.id}>
                        <NotePreview
                            note={note}
                            onRemoveNote={onRemoveNote}
                            onPinNote={onPinNote}
                        />
                    </li>
                ) : (
                    ""
                )
            )}
        </ul>
        </section>
    );
}