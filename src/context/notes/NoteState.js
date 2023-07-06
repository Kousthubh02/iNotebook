import { useState } from "react";
import NoteContext from "./NoteContext";

const host = "http://localhost:5000";
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMDIzMDUwZjIwNWM2NDI3NDhhMmY3In0sImlhdCI6MTY4ODIxNjMyNn0.66bLU2Bt_uwOQEnPZsBt2qB4Er0dCF0QkraoY4EEZls";

const NoteState = (props) => {
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });

      const json = await response.json();
    //   console.log(json);
      setNotes(json)
    } catch (error) {
      console.error(error);
    }
  };

  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const note = {
        _id: "64a159e09c3cab375be5e98i",
        user: "64a023050f205c642748a2f7",
        title: title,
        description: description,
        tag: tag,
        date: "2023-07-02T11:05:04.666Z",
        __v: 0,
      };
      setNotes(notes.concat(note));
    } catch (error) {
      console.error(error);
    }
  };



  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = response.json();
      console.log(json);


      let newNotes=JSON.parse(JSON.stringify(notes))
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id===id){
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        } 
      }
      setNotes(newNotes);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNote = async (id) => {
    try {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        });
        const json = response.json();
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    console.log("deleting note with id " + id);
    let newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
