import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const Addnote = ({ showAlert }) => {
  const [note, setNote] = useState({ title: "", description: "", tag: "default" });

  const context = useContext(NoteContext);
  const { addNote } = context;

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    showAlert("Note Added","success");
    setNote({ title: "", description: "", tag: "default" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Add a note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            rows="3"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
          ></textarea>
        </div>
        <div className="container d-flex justify-content-center">
          <button
            disabled={note.title.length < 3 || note.description.length < 5}
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addnote;
