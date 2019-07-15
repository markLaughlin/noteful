import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Data from './Data'
import MainSidebar from "./MainSidebar"
import MainMain from "./MainMain"
import FolderSidebar from "./FolderSidebar"
import FolderMain from "./FolderMain"
import NoteSidebar from "./NoteSidebar"
import NoteMain from "./NoteMain"
import "./App.css"

class App extends Component{

  constructor(props){
    super(props)

    const data = Data

    this.state = {
       stateData: data
    }
  }

  render(){
    console.log("App component render method ran")
    console.log("Here is the data set in state in the app component: ", this.state.stateData)

    const data = this.state.stateData

    return (
      <div className="appDiv">

        <header>
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>

        <div className="sideMainContainer">
        
        {/* Main Route */}

        <Route exact path='/' 
              render={(routeProps) => {
                console.log("Here are the routeProps: ")
                console.log(routeProps)
                return(
                  <MainSidebar data={data}/>
                )
              }}
        /> 

        <Route exact path='/'
            render={(routeProps) => {
              console.log("Here are the route props again: ")
              console.log(routeProps)
                return(
                  <MainMain data={data}/>
                )
            }}
        /> 

        {/* Folder Route */}

        <Route path="/folder/:folderId"
            render={(routeProps) => {
              console.log("Here are the routerProps: ")
              console.log(routeProps)
              return(
                <FolderSidebar data={data}
                currentFolder={data.folders.find(folder => folder.id === routeProps.match.params.folderId)}
                />
              )
            }}
        />

        <Route path="/folder/:folderId"
            render={(routeProps) => {
              console.log("Here are the routeProps again: ")
              console.log(routeProps)
              return(
                <FolderMain data={data}
                currentFolder={data.folders.find(folder => folder.id === routeProps.match.params.folderId)} 
                allNotes = {data.notes}
                />
              )
            }}
        />

        {/* Note Route */}

        <Route path="/note/:noteId"
            render={(routeProps) => {
              console.log("Here are the routeProps for NoteSidebar: ")
              console.log(routeProps)
              console.log(routeProps.match.params)
              return(
                <NoteSidebar 
                   onGoBack={() => routeProps.history.goBack()}
                   currentNote={data.notes.find(note => note.id === routeProps.match.params.noteId)}
                   data={data} 
                />
              )
            }}
        />

        <Route path="/note/:noteId"
            render={(routeProps) => {
              return(
                <NoteMain 
                  currentNote={data.notes.find(note => note.id === routeProps.match.params.noteId)} 
                  />
              )
            }}
        />
           
        </div>

      </div>
    );
  }
}

export default App;