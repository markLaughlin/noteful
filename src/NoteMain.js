import React from 'react';
import './Main.css'

function NoteMain(props){

  console.log("NoteMain function ran")
  console.log("Props passed into the NoteMain component")
  console.log(props)

 
      return (
          <div className="mainDiv">
            <div className="noteDiv">
              <h2>{props.currentNote.name}</h2>
              Modified: {props.currentNote.modified}
              <br/>
              <button className="deleteNoteButton">delete</button>
            </div>
            
            <div className="noteContentDiv">
              {props.currentNote.content}
            </div>

          </div>      
      );
    }
  
  
  export default NoteMain;
/* 
  The library passes in a prop called match into every route that is rendered. 
  Inside this match object is another object called params */