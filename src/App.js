import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Navbar from "./components/Navbar";
import NoteAdd from "./components/NoteAdd";
import Notebook from "./components/Notebook";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyBFZPXZ4PxgdGJ9wazwOdj-N57TPZM-f7Q",
  authDomain: "notebook-6b186.firebaseapp.com",
  databaseURL: "https://notebook-6b186-default-rtdb.firebaseio.com/",
  projectId: "notebook-6b186",
  storageBucket: "notebook-6b186.appspot.com",
  messagingSenderId: "128122087401",
  appId: "1:128122087401:web:80564dee7381d74449cd78",
  measurementId: "G-BKLF1ZJYD9"
};
firebase.initializeApp(firebaseConfig);


const App = () => {
  const [noteBookData, setNoteBookData] = useState([]);

  const updateNotes = () => {
    firebase
      .database()
      .ref("notebook")
      .on("child_added", (snapshot) => {
        let note = {
          id: snapshot.key,
          title: snapshot.val().title,
          description: snapshot.val().description,
        };
        let notebook = noteBookData;
        notebook.push(note);
        setNoteBookData([...noteBookData]);
      });

    firebase
      .database()
      .ref("notebook")
      .on("child_removed", (snapshot) => {
        let notebook = noteBookData;
        notebook = noteBookData.filter((note) => note.id !== snapshot.key);
        setNoteBookData(notebook);
      });
  };

  useEffect(() => {
    updateNotes();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="note-section">
        <NoteAdd />
        <Notebook notebook={noteBookData} />
      </div>
    </div>
  );
};
export default App;