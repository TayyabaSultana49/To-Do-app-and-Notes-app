import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, category, content) => {
    const newNote = {
      id: Date.now(),
      title,
      category,
      content,
      date: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id, updatedNote) => {
    setNotes(
      notes.map(note =>
        note.id === id ? { ...note, ...updatedNote } : note
      )
    );
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Notes App</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <NoteForm addNote={addNote} />

      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
}

export default App;