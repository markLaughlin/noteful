import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Main.css'
import NotefulContext from "./NotefulContext"

class MainMain extends Component{

    static contextType = NotefulContext
  
    render(){
      console.log("render method of MainMain Route component ran")
      console.log("this.context.contextNotes: ")
      console.log(this.context.contextNotes)
      console.log("this.context.contextNotes[0]: ")
      console.log(this.context.contextNotes[0])

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

            <Link to="addnote">
            <button className="bigNoteButton">Add Note</button>
            </Link>

          </div>      
      );
    }
  }
  
  export default MainMain;