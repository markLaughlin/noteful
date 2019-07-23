import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Main.css'
import NotefulContext from "./NotefulContext"

class MainMain extends Component{

    static contextType = NotefulContext
  
    render(){
      console.log("render method of MainMain Route component ran")

      let allNotes = this.context.contextNotes.map(note => 
              <div key={note.id} className="noteDiv">
                  <Link to={`/note/${note.id}`}>
                  {note.name}
                  </Link>
                <br/>
                <button className="deleteNoteButton" onClick={() => this.context.deleteNote(note.id)}>Delete Note</button>
              </div>
        )
      
      return (
          <div className="mainDiv">

              {allNotes}

            <button className="addNoteButton">Add Note</button>
          </div>      
      );
    }
  }
  
  export default MainMain;