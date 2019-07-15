import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Main.css'

class MainMain extends Component{
  
    render(){
      console.log("render method of MainMain Route component ran")
      console.log(this.props.data)

      let allNotes = this.props.data.notes.map(note => 
              <div key={note.id} className="noteDiv">
                  <Link to={`/note/${note.id}`}>
                  {note.name}
                  </Link>
                <br/>
                <button className="deleteNoteButton">Delete Note</button>
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