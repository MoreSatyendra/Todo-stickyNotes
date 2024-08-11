import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { databases } from "../appwrite/config";
import { db } from "../appwrite/database";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  const init = async () => {
    const response = await db.notes.list();
    setNotes(response.documents);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
    </div>
  );
};

export default NotesPage;
