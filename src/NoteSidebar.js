import React, { Component } from "react"

import "./Sidebar.css"

class NoteSidebar extends Component{

    render(){

        console.log("render method of NoteSidebar Route component ran")
        console.log("Here are the props in the NoteSidebar component: ")
        console.log(this.props)
        let currentNoteFolderId = this.props.currentNote.folderId;
        console.log(currentNoteFolderId)
        let currentFolder = this.props.data.folders.find(folder => folder.id === currentNoteFolderId)
        console.log("CurrentFolder: ")
        console.log(currentFolder) 

        return(

                <div className="sidebarDiv">
                    <br/>
                    <br/>
                    <button className="goBackButton"
                    onClick={this.props.onGoBack}
                    >Go Back</button>

                    <h2> 
                        {currentFolder.name}
                    </h2>
                    
                </div>

        )
    }
}

export default NoteSidebar