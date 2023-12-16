import { noteService } from "../services/note.service.js";

const { useState, useEffect } = React;

export function SetNoteTodos({ onChangeType, onAddNote}) {
  const [titleOfList, setTitleOfList] = useState('');
  const [lines, setLines] = useState(['']);

  const handleSave = () => {
    if (titleOfList && lines.length > 1){
      const newList = noteService.makeNewNoteList(titleOfList)
      lines.forEach((line, index) => {
        if (line === '') {
          console.log(line);
          return;
        }
        newList.info.todos[index] = { txt: index+1 + '.' + line, isDone: false };
      });
        if (newList.info.todos.length > 0){
          onAddNote(newList)
          setLines([''])
          setTitleOfList('')
      }
    }
  };

  const handleLineChange = (index, value) => {
    const newLines = [...lines];
    newLines[index] = value;
    setLines(newLines);
  };

  useEffect(() => {
    const lastLine = lines[lines.length - 1];
    if (lastLine.length === 1 && lines.length < 4) {
      // Add a new line when the first character is typed and the total number of lines is less than 4
      setLines([...lines, ""]);
    }
  }, [lines]);

  return (
    <div>
      <div className="note-input">
        <input
          type="text"
          className="input list-title"
          placeholder="Title"
          value={titleOfList}
          onChange={(e) => setTitleOfList(e.target.value)}
        />
        <div className="list-items">
          {lines.map((line, index) => (
            <input
              key={index}
              type="text"
              className="list-item"
              placeholder="List item"
              value={line}
              onChange={(e) => handleLineChange(index, e.target.value)}/>
          ))}
        </div>
      </div>
      <div className="change-btns">
        <button className="btns" onClick={handleSave}>
          Save
        </button>
        <button className="btns" onClick={() => onChangeType("NoteTxt")}>
          NoteTxt
        </button>
        <button className="btns" onClick={() => onChangeType("NoteImg")}>
          NoteImg
        </button>
      </div>
    </div>
  );
}
