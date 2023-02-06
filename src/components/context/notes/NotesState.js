import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{

    const notesInitial=[
        {
          "_id": "63dcabd78bb3f4ae9ec5c373",
          "user": "63da22895e20faa04bb233e0",
          "title": "Sandy",
          "description": "No smoking , Quit Smoking",
          "tag": "New Year Resolution",
          "date": "2023-02-03T06:38:15.059Z",
          "__v": 0
        },
        {
          "_id": "63ddfbeae64393cf7798575a",
          "user": "63da22895e20faa04bb233e0",
          "title": "Sandy ke notes",
          "description": "Naya Note ",
          "tag": "New Notes",
          "date": "2023-02-04T06:32:10.437Z",
          "__v": 0
        },
        {
          "_id": "63ddfbf3e64393cf7798575c",
          "user": "63da22895e20faa04bb233e0",
          "title": "Sandy ke notes 45",
          "description": "Naya Note 45 ",
          "tag": "New Notes",
          "date": "2023-02-04T06:32:19.865Z",
          "__v": 0
        },
        {
            "_id": "63ddfbf3e64393cf7798575c",
            "user": "63da22895e20faa04bb233e0",
            "title": "Sandy ke notes 45",
            "description": "Naya Note 45 ",
            "tag": "New Notes",
            "date": "2023-02-04T06:32:19.865Z",
            "__v": 0
          },
          {
            "_id": "63ddfbf3e64393cf7798575c",
            "user": "63da22895e20faa04bb233e0",
            "title": "Sandy ke notes 45",
            "description": "Naya Note 45 ",
            "tag": "New Notes",
            "date": "2023-02-04T06:32:19.865Z",
            "__v": 0
          }
      ]
      const [notes,setNotes]=useState(notesInitial)
 
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
