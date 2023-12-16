import { noteService } from "../services/note.service.js";

const { useState, useEffect } = React;

export function SetNoteTxt({ onChangeType, onAddNote }) {
  const [textToNote, setTextToNote] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("white");

  const colors = [
    "#FFE3D2",
    "#EAEAEA",
    "#FFD2E3",
    "#b5c1ff",
    "#c6f8cf",
    "#CEFBEC",
  ];
  
  const handleColorPickerToggle = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleSave = () => {
    if (textToNote && selectedColor != 'white') {
      const newNote = noteService.makeNewNoteTxt(textToNote);
      newNote.style.backgroundColor = selectedColor;
      onAddNote(newNote);
      setSelectedColor('white')
      setTextToNote('')
      setShowColorPicker(false)
    }
  };

  return (
    <div className="note-input">
      <input
        type="text"
        className="input"
        placeholder="Take a Note"
        value={textToNote}
        style={{ backgroundColor: selectedColor }}
        onChange={(e) => setTextToNote(e.target.value)}
      />
      <div>
        <button className="primarybtn" onClick={handleColorPickerToggle}>Open Color Picker</button>
        {showColorPicker && (
          <div className="add-txt-background">
            <h3>Pick a background color:</h3>
            <div className="flex">
              {colors.map((color, index) => (
                <div
                  className="color-text-picker"
                  key={index}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    setSelectedColor(color);
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      <button className="btns" onClick={handleSave}>Save</button>
      <button className="btns" onClick={() => onChangeType("NoteImg")}>NoteImg</button>
      <button className="btns" onClick={() => onChangeType("NoteTodos")}>NoteTodos</button>
    </div>
  );
}
