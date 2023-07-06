import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

const Notes = ({ showAlert }) => {
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    getNotes();
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
      <Addnote showAlert={showAlert} />

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
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    defaultValue={note.etitle || ""}
                    name="etitle"
                    onChange={onChange}
                    minLength={3}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    id="edescription"
                    defaultValue={note.edescription || ""}
                    name="edescription"
                    onChange={onChange}
                    minLength={5}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    defaultValue={note.etag || ""}
                    name="etag"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your notes</h2>
        <div className="container">{notes.length === 0 && 'No notes to display'}</div>
        {notes.map((note) => {
          return (
            <Noteitem showAlert={showAlert} key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
