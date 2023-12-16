import { NoteTxt } from "./NoteTxt.jsx";
import { NoteImg } from "./NoteImg.jsx";
import { NoteTodos } from "./NoteTodos.jsx";


export function NotePreview({ note, onUpdateNote, onRemoveNote, onPinNote }) {
    switch(note.type){
        case 'NoteTxt':
            return <NoteTxt note={note} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} onPinNote={onPinNote}/>
        case 'NoteImg':
            return <NoteImg note={note} onRemoveNote={onRemoveNote} onPinNote={onPinNote} />
        case 'NoteTodos':
            return <NoteTodos note={note} onRemoveNote={onRemoveNote} onPinNote={onPinNote} />
    }
}
