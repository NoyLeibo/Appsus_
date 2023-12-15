const { useState, useEffect } = React;
import { noteService } from "../services/note.service.js";

export function SetNoteImg({ onAddNote, onChangeType }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [textToNote, setTextToNote] = useState("");
  const [isUpload, setIsUpload] = useState(false);
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
  // const isUpload = <i class="fa-solid fa-upload fa-xl"></i> : <i class="fa-solid fa-circle-exclamation fa-xl"></i>
  const handleColorPickerToggle = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleFileSelect = (event) => {
    setIsUpload(true);
    const input = event.target;
    if ("files" in input && input.files.length > 0) {
      const file = input.files[0];
      setSelectedFile(file);
    }
  };
  
  const handleSave = () => {
    if (selectedFile && selectedColor != "white") {
      const newNote = noteService.makeNewNoteImg(
        selectedFile,
        textToNote,
        selectedColor
      );
      onAddNote(newNote);
      setSelectedFile(null);
      setTextToNote("");
      setSelectedColor("white");
      setShowColorPicker(false);
      setIsUpload(false);
    }
  };

  return (
      <div className="note-input">
        <input
          type="text"
          className="input"
          placeholder="Take an image Note"
          value={textToNote}
          style={{ backgroundColor: selectedColor }}
          onChange={(e) => setTextToNote(e.target.value)}
        />
        <div className="flex">
          <button className="primarybtn" onClick={handleColorPickerToggle}>
            Open Color Picker
          </button>
        <form>
          <label htmlFor="file-input">
            {isUpload ? (
              <i className="fa-solid fa-circle-check fa-xl"></i>
            ) : (
              <i className="fa-solid fa-upload fa-xl"></i>
            )}
          </label>
          <input
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleFileSelect}
          ></input>
        </form>
        </div>

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
        <button className="btns" onClick={handleSave}>
          Save
        </button>
        <button className="btns" onClick={() => onChangeType("NoteTxt")}>
          NoteTxt
        </button>
        <button className="btns" onClick={() => onChangeType("NoteTodos")}>
          NoteTodos
        </button>
    </div>
  );
}
