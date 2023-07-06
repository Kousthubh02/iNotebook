import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

const NoteItem = ({ note, updateNote, showAlert }) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    <div className="card my-3 mx-3 shadow" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-outline-warning mx-2"
            onClick={() => updateNote(note)}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            className="btn btn-outline-danger mx-2"
            onClick={() => {
              deleteNote(note._id);
              showAlert('Note Deleted','danger');
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
