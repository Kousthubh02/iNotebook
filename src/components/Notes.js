import React , { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, addNote } = context;
  return (
<>
    <Addnote/>
    <div className='row my-3'>
      <h2>Your notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id} note={note}/>
        // return <p key={note.id}>{note.title}</p>;
      })}
    </div>
    </>

  )
}

export default Notes
