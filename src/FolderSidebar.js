import React, { Component } from "react"
import {  NavLink } from 'react-router-dom'
import "./Sidebar.css"
import NotefulContext from "./NotefulContext"

class FolderSidebar extends Component{

    static contextType = NotefulContext

    render(){

        console.log("render method of FolderSidebar Route component ran")
        console.log("Here are the Route props passed in .match.params.folderId: ")
        console.log(this.props.match.params.folderId)
        
        let allFolders =  this.context.contextFolders.map(folder=>
 
            <div key={folder.id} className="folderDiv">
                <NavLink to={`/folder/${folder.id}`}>
                    {folder.name}
                </NavLink>
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

export default FolderSidebar