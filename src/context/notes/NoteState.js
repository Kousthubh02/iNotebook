import react, { useState } from 'react'
import NoteContext from './NoteContext'


const NoteState=(props)=>{

    const notesInitial=[
        {
            "_id": "64a159c69c3cab375be5e97f",
            "user": "64a023050f205c642748a2f7",
            "title": "my department",
            "description": "my department is awesome",
            "tag": "personal",
            "date": "2023-07-02T11:04:38.319Z",
            "__v": 0
        },
        {
            "_id": "64a159c69c3cab375be5e97f",
            "user": "64a023050f205c642748a2f7",
            "title": "my department",
            "description": "my department is awesome",
            "tag": "personal",
            "date": "2023-07-02T11:04:38.319Z",
            "__v": 0
        },
        {
            "_id": "64a159c69c3cab375be5e97f",
            "user": "64a023050f205c642748a2f7",
            "title": "my department",
            "description": "my department is awesome",
            "tag": "personal",
            "date": "2023-07-02T11:04:38.319Z",
            "__v": 0
        },
        {
            "_id": "64a159c69c3cab375be5e97f",
            "user": "64a023050f205c642748a2f7",
            "title": "my department",
            "description": "my department is awesome",
            "tag": "personal",
            "date": "2023-07-02T11:04:38.319Z",
            "__v": 0
        },
        {
            "_id": "64a159e09c3cab375be5e981",
            "user": "64a023050f205c642748a2f7",
            "title": "coding",
            "description": "i have to do a project in python",
            "tag": "professional",
            "date": "2023-07-02T11:05:04.666Z",
            "__v": 0
        },
    ]

    

        const [notes,setNotes]=useState(notesInitial)

    const addNote=(title,description,tag)=>{
        let note= {
            "_id": "64a159e09c3cab375be5e989",
            "user": "64a023050f205c642748a2f7",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-02T11:05:04.666Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    const editNote=()=>{

    }
    const deleteNote=()=>{

    }


    return (
        <NoteContext.Provider value={{notes,setNotes,addNote,editNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
    }


export default NoteState