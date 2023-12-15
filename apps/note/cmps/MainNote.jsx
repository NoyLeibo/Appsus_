import { noteService } from '../services/note.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const { useState, useEffect } = React


export function MainNote() {
    
    
    return (
        <div>
        <input
          type="text"
          className="search-input"
        //   onChange
          placeholder="Search"
        />
        </div>
    );
}
