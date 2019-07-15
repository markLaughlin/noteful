import React, { Component } from "react"
import {  NavLink } from 'react-router-dom'

import "./Sidebar.css"

class FolderSidebar extends Component{

    render(){

        console.log("render method of FolderSidebar Route component ran")
        console.log("Here are the props passed into the FolderSidebar component: ")
        console.log(this.props)

        let data = this.props.data

        let allFolders =  data.folders.map(folder=>
 
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