import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { useNavigate } from 'react-router-dom';

const Notes = ({ showAlert }) => {
  let navigate = useNavigate();

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate('/login');
    }
  }, []);

  const ref = useRef(null);
  const refclose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editNote({
      id: note.id,
      title: note.etitle,
      description: note.edescription,
      tag: note.etag,
    });
    refclose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="container containerfill border py-5 m-2 rounded-4 shadow">

      <Addnote showAlert={showAlert} />
      </div>

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* Modal content */}
      </div>

      <div className="row my-3">
        <h2>Your notes</h2>
        <div className="container">
          {Array.isArray(notes) && notes.length === 0 && 'No notes to display'}
        </div>
        {Array.isArray(notes) &&
          notes.map((note) => (
            <Noteitem showAlert={showAlert} key={note._id} updateNote={updateNote} note={note} />
          ))}
      </div>

    </>
  );
};

export default Notes;
