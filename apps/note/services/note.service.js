// note service
import { storageService } from "../../../services/async-storage.service.js";
import { utilService } from "../../../services/util.service.js";

export const noteService = {
  query,
  getDefaultFilter,
  makeNewNoteTxt,
  makeNewNoteImg,
  makeNewNoteList,
  remove,
  save,
  get,
};

const demoNotes = [
  {
    id: "n101",
    createdAt: 1112222,
    type: "NoteTxt",
    isPinned: true,
    style: { backgroundColor: "#FFE3D2" },
    info: { txt: "Fullstack Me Baby!" },
  },
  {
    id: "n102",
    type: "NoteImg",
    isPinned: false,
    info: {
      url: "https://www.delscookingtwist.com/wp-content/uploads/2022/01/Easy-Fluffy-American-Pancakes_1.jpg",
      title: "Bobi and Me",
    },
    style: { backgroundColor: "rgb(255, 227, 210)" },
  },
  {
    id: "n103",
    type: "NoteTodos",
    isPinned: false,
    info: {
      title: "Get my stuff together",
      todos: [
        { txt: "1.Driving license", doneAt: null },
        { txt: "2.Coding power", doneAt: 187111111 },
      ],
    },
  },
];

const NOTE_KEY = "noteDB";
_createNotes();

function makeNewNoteTxt(txt) {
  return {
    createdAt: 1112222,
    type: "NoteTxt",
    isPinned: true,
    style: { backgroundColor: "rgb(255, 210, 227)" },
    info: { txt },
  };
}

function makeNewNoteImg(img_path, txt, selectedColor) {
  return {
    type: "NoteImg",
    isPinned: false,
    info: { url: URL.createObjectURL(img_path), title: txt },
    style: { backgroundColor: selectedColor },
  };
}

function makeNewNoteList(title) {
  return {
    type: "NoteTodos",
    isPinned: false,
    info: {
      title: title,
      todos: [],
    }
  }
}

function query() {
  return storageService.query(NOTE_KEY).then((notes) => {
    // filter notes
    return notes;
  });
}

function get(noteId) {
  return storageService.get(NOTE_KEY, noteId);
}

function save(note) {
  console.log(note);
  if (note.id) {
    return storageService.put(NOTE_KEY, note);
  } else {
    return storageService.post(NOTE_KEY, note);
  }
}

function getDefaultFilter() {
  return { txt: "" };
}

function remove(noteId) {
  return storageService.remove(NOTE_KEY, noteId);
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY);
  if (!notes || !notes.length) {
    notes = demoNotes;

    utilService.saveToStorage(NOTE_KEY, notes);
  }
}

//* ------------------- Axios -------------------
// axios (common JS library for AJAX) works with promises:
// const prm1 = axios.get('https://api.github.com/users/vyaron')
// console.log('prm1:', prm1)
// prm1.then((res) => {
//     const user = res.data
//     console.log('user:', user)
// })
// console.log('prm1:', prm1)
