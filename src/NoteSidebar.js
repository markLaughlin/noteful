import React, { Component } from "react"
import NotefulContext from "./NotefulContext"

import "./Sidebar.css"

class NoteSidebar extends Component{

    static contextType = NotefulContext

    render(){
        console.log("render method of NoteSidbar ran")

        let currentNote = "currentNote to come"
        let currentFolder = "currentFolder to come"


        if(this.context.contextNotes){
        currentNote= this.context.contextNotes.find(note => note.id === this.props.match.params.noteId)
        }
        
        if(this.context.contextFolder){
        let currentFolder = this.context.contextFolders.find(folder => folder.id === currentNote.folderId)
        console.log("Here is the currentFolder: ")
        console.log(currentFolder)
        }

        let currentFolderName = "currentFolder name to come"

        if(currentFolder){
            currentFolderName = currentFolder.name
        }

        return(

                <div className="sidebarDiv">
                    <br/>
                    <br/>
                    <button className="goBackButton"
                    onClick={this.props.history.goBack}
                    >Go Back</button>
                    
                    <div>
                    <h2> 
                        {currentFolderName}
                    </h2>
                    </div>
                    
                </div>

        )
    }
}

export default NoteSidebar