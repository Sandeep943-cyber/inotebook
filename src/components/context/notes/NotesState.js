import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{

    const notesInitial=[
        {
          "_id": "63dca2bd78bb3f4ae9ec5c373",
          "user": "63da22895e20faa04bb233e0",
          "title": "Sandy",
          "description": "No smoking , Quit Smoking",
          "tag": "New Year Resolution",
          "date": "2023-02-03T06:38:15.059Z",
          "__v": 0
        },
        {
          "_id": "63ddfbea4e64393cf76798575a",
          "user": "63da22895e20faa04bb233e0",
          "title": "Sandy ke notes",
          "description": "Naya Note ",
          "tag": "New Notes",
          "date": "2023-02-04T06:32:10.437Z",
          "__v": 0
        },
        {
          "_id": "63d1dfb4f3e64393cf77698575c",
          "user": "63da22895e20faa04bb233e0",
          "title": "Sandy ke notes 45",
          "description": "Naya Note 45 ",
          "tag": "New Notes",
          "date": "2023-02-04T06:32:19.865Z",
          "__v": 0
        },
        {
            "_id": "63ddf1bf3e64393cf47798575c",
            "user": "63da22895e20faa04bb233e0",
            "title": "Sandy ke notes 45",
            "description": "Naya Note 45 ",
            "tag": "New Notes",
            "date": "2023-02-04T06:32:19.865Z",
            "__v": 0
          },
          {
            "_id": "613ddfbf3e64393cf73798575c",
            "user": "63da22895e20faa04bb233e0",
            "title": "Sandy ke notes 45",
            "description": "Naya Note 45 ",
            "tag": "New Notes",
            "date": "2023-02-04T06:32:19.865Z",
            "__v": 0
          }
      ]
      const [notes,setNotes]=useState(notesInitial)

      //ADD a note
      const addNote=(title,description,tag)=>{
        console.log("Adding a new note")
        const note= {
          "_id": "63dcabd78bb3f4ae9ec5c373",
          "user": "63da22895e20faa04bb233e0",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-02-03T06:38:15.059Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      //DELETE a note
      const deleteNote=()=>{
        
      }

      //EDIT a note
      const editNote=()=>{
        
      }
 
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
