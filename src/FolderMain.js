import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Main.css'

class FolderMain extends Component{
  
    render(){
      console.log("render method of FolderMain Route component ran")
      console.log(this.props)
      let currentFolder = this.props.currentFolder;
      let allNotes = this.props.allNotes;
      console.log(currentFolder)
      console.log(allNotes)
      let currentFolderID = currentFolder.id

      let notesToDisplay = allNotes.filter(note => note.folderId === currentFolderID)
      console.log(notesToDisplay)

      let dezNotes = notesToDisplay.map(note => 
        <div key={note.id} className="noteDiv">
             <Link to={`/note/${note.id}`}>
                  {note.name}
              </Link>
              <br/>
              <button className="deleteNoteButton">delete</button>
        </div>
      )
      
      return (
          
          <div className="mainDiv">

              <h2>{this.props.currentFolder.name} Notes</h2>

              {dezNotes}

              <button className="addNoteButton">Add Note</button>

          </div>
      );
    }
  }
  
  export default FolderMain;