import { NoteTxt } from "./NoteTxt.jsx";
import { NoteImg } from "./NoteImg.jsx";
import { NoteTodos } from "./NoteTodos.jsx";


export function NotePreview({ note, onUpdateNote, onRemoveNote }) {
    switch(note.type){
        case 'NoteTxt':
            return <NoteTxt note={note} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote}/>
        case 'NoteImg':
            return <NoteImg note={note} onRemoveNote={onRemoveNote} />
        case 'NoteTodos':
            return <NoteTodos note={note} onRemoveNote={onRemoveNote} />
    }
}
