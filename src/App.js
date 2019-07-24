import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import MainSidebar from "./MainSidebar"
import MainMain from "./MainMain"
import FolderSidebar from "./FolderSidebar"
import FolderMain from "./FolderMain"
import NoteSidebar from "./NoteSidebar"
import NoteMain from "./NoteMain"
import "./App.css"
import NotefulContext from "./NotefulContext"

class App extends Component{

  state = {
    apiNotes: [],
    apiFolders: []
};

  componentDidMount(){
    console.log("ComponentDidMount Ran")
    fetch("http://localhost:9090/folders")
    .then(response => response.json())
    .then(responseJson => {
      console.log("HERE COME THE FOLDERS")
      console.log(responseJson)
      this.setState({
        apiFolders: responseJson,
      }) 
    }) 
    // this.setState({ someProperty: { ...this.state.someProperty, flag: false} });
    fetch("http://localhost:9090/notes")
    .then(responseNotes => responseNotes.json())
    .then(responseNotesJson => {
      console.log("HERE COME THE NOTES!")
      console.log(responseNotesJson)
      this.setState({
        apiNotes: responseNotesJson
      })
    }) 
  }

  deleteNote = (noteIdToDelete) => {
    console.log("deleteNote ran")
    console.log(noteIdToDelete)
    const newArray = this.state.apiNotes.filter(item => item.id !== noteIdToDelete)
    console.log("Here is the newArray, which does not contain the note to delete: ")
    console.log(newArray)
    this.setState({apiNotes: newArray})
  }

  render(){
    console.log("App component render method ran")
    console.log("Here is Folders data set in state in the app component through the fetch request: ", this.state.apiFolders)
    console.log("Here is Notes data set in state in the app component through the fetch request: ", this.state.apiNotes)

    const contextValue = {
      contextFolders: this.state.apiFolders,
      contextNotes: this.state.apiNotes,
      deleteNote: this.deleteNote
    }

    return (
      <NotefulContext.Provider value={contextValue}>

      <div className="appDiv">

        <header>
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>

        <div className="sideMainContainer">
        
        {/* Main Route */}

        <Route exact path='/' 
          component={MainSidebar}
        /> 

        <Route exact path='/'
           component={MainMain}
        /> 

        {/* Folder Route */}

        <Route path="/folder/:folderId"
          component={FolderSidebar}
        />

        <Route path="/folder/:folderId"
          component={FolderMain}
        />

        {/* Note Route */}

        <Route path="/note/:noteId"
          component={NoteSidebar}
        />

        <Route path="/note/:noteId"
          component={NoteMain}
        />
           
        </div>

      </div>
      </NotefulContext.Provider>

    );
  }
}

export default App;