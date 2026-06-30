import { useState } from "react";

function NoteItem({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [category, setCategory] = useState(note.category);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    editNote(note.id, {
      title,
      category,
      content,
    });

    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>

          <p><strong>Category:</strong> {note.category}</p>

          <p>{note.content}</p>

          <small>{note.date}</small>

          <div className="buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteItem;