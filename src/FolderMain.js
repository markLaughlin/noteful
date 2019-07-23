import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Main.css'
import NotefulContext from "./NotefulContext"

class FolderMain extends Component{

    static contextType = NotefulContext
  
    render(){
      console.log("render method of FolderMain Route component ran")
      console.log("this.context.contextFolders")
      console.log(this.context.contextFolders)
      console.log("this.context.contextFolders[0]")
      console.log(this.context.contextFolders[0])
      // breaks down here:
      // console.log(this.context.contextFolders[0].name)
 

      const currentFolder = this.context.contextFolders.find(
        folder => folder.id === this.props.match.params.folderId)
        const allNotes = this.context.contextNotes
  
      let notesToDisplay = allNotes.filter(note => note.folderId === currentFolder.id)

      let dezNotes = notesToDisplay.map(note => 
        <div key={note.id} className="noteDiv">
             <Link to={`/note/${note.id}`}>
                  {note.name}
              </Link>
              <br/>
              <button className="deleteNoteButton" onClick={() => this.context.deleteNote(note.id)}>delete</button>
        </div>
      ) 

      let currentFolderName = "currentFolderName to come"

      if(currentFolder){
        currentFolderName = currentFolder.name
      } 
      
      return (
          
          <div className="mainDiv">

              <h2>{currentFolderName} Notes</h2>

              {dezNotes}

              <button className="addNoteButton">Add Note</button>

          </div>
      );
    }
  } 
  
  export default FolderMain;