export function SetNoteTodos({ onChangeType }) {
  return (
    <div>
      <div className="note-input">
          <input type="text" className="input list-title" placeholder="Title" />
        {/* כאן יהיה תוכן של SetNoteTxt */}
      </div>
      <div className="change-btns">
        <button className="btns" onClick={() => onChangeType('NoteTxt')}>NoteTxt</button>
        <button className="btns" onClick={() => onChangeType('NoteImg')}>NoteImg</button>
      </div>
    </div>
  )
}