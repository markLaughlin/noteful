import React, { Component } from "react"
import { Link } from 'react-router-dom'
import NotefulContext from "./NotefulContext"


import "./Sidebar.css"

class MainSidebar extends Component{

    static contextType = NotefulContext;

    render(){

        console.log("render method of MainSidebar Route component ran")
 
       
        console.log("Here is the data passed into the MainSidebar component through context: ")
        console.log(this.context.contextData)
        console.log("contextNotes and contextFolders")
        console.log(this.context.contextFolders)
        console.log(this.context.contextNotes)

        let allFolders =  this.context.contextFolders.map(folder=> 
            <div key={folder.id} className="folderDiv">
                <Link to={`/folder/${folder.id}`}>
                    {folder.name}
                </Link>
            </div>
            );

        return(

                <div className="sidebarDiv">
                        {allFolders}
                    <button className="folderButton">Add New Folder</button>
                </div>

        )
    }
}

export default MainSidebar

