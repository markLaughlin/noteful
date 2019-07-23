import React, { Component } from 'react';
import './Main.css'
import NotefulContext from "./NotefulContext"

class NoteMain extends Component{

  static contextType = NotefulContext

  render(){
    console.log("render method of the NoteMain component ran")

    let currentNote= this.context.contextNotes.find(note => note.id === this.props.match.params.noteId)
    
    let currentNoteName = ""
    let currentNoteModified = ""
    let currentNoteContent = ""
    let currentNoteId = ""

    if(currentNote){
      currentNoteName = currentNote.name
      currentNoteModified = currentNote.modified
      currentNoteContent = currentNote.content
      currentNoteId = currentNote.id
    }
    
    if(currentNoteName){

      return (
        <div className="mainDiv">
          <div className="noteDiv">
            <h2>{currentNoteName}</h2>
            Modified: {currentNoteModified}
            <br/>
            <button className="deleteNoteButton" onClick={() => this.context.deleteNote(currentNoteId)}>delete</button>
          </div>
          
          <div className="noteContentDiv">
            {currentNoteContent}
          </div>

        </div>      
      );
    } else return (
        <div className="mainDiv"></div>
    )
  }
}

  export default NoteMain;
