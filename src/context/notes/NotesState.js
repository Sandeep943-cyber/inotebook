import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
  const host ="http://localhost:5000"
    const notesInitial=[]
      const [notes,setNotes]=useState(notesInitial)
      //Get all notes
      const getNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYTIyODk1ZTIwZmFhMDRiYjIzM2UwIn0sImlhdCI6MTY3NTM0Mzc1N30.ndKVWu71XFBr8j1P90mqxCtSpahITpB_fJsiVnwnjLs"
          }
        });
        const json = await response.json() 
        console.log(json)
        setNotes(json)
      } 

      //ADD a note
      const addNote=async (title,description,tag)=>{
      
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYTIyODk1ZTIwZmFhMDRiYjIzM2UwIn0sImlhdCI6MTY3NTM0Mzc1N30.ndKVWu71XFBr8j1P90mqxCtSpahITpB_fJsiVnwnjLs"
          },
          body: JSON.stringify({title, description, tag})
        });
        const note = await response.json();

        setNotes(notes.concat(note))
      }

      //DELETE a note
      const deleteNote=async (id)=>{
        //API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYTIyODk1ZTIwZmFhMDRiYjIzM2UwIn0sImlhdCI6MTY3NTM0Mzc1N30.ndKVWu71XFBr8j1P90mqxCtSpahITpB_fJsiVnwnjLs"
          }
        });
        const json = response.json(); 
        //
        console.log("Deleting a note with Id"+ id);
        const newNotes=notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }

      //EDIT a note
      const editNote=async(id,title,description,tag)=>{
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkYTIyODk1ZTIwZmFhMDRiYjIzM2UwIn0sImlhdCI6MTY3NTM0Mzc1N30.ndKVWu71XFBr8j1P90mqxCtSpahITpB_fJsiVnwnjLs"
          },
          body: JSON.stringify({title, description, tag})
        });
        const json = await response.json(); 
    
         let newNotes = JSON.parse(JSON.stringify(notes))
        //Logic to edit note in client side
        for(let index=0;index < newNotes.length; index++){
          const element=notes[index];
          if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag; 
            break;
          }
        }
        setNotes(newNotes)
      }
 
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
