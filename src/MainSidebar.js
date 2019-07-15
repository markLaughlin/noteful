import React, { Component } from "react"
import { Link } from 'react-router-dom'

import "./Sidebar.css"

class MainSidebar extends Component{

    render(){

        console.log("render method of MainSidebar Route component ran")
        let data = this.props.data
        console.log("Here is the data passed into the MainSidebar component: ")
        console.log(data)

        let allFolders =  data.folders.map(folder=> 
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