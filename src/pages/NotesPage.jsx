import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { databases } from "../appwrite/config";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  const init = async () => {
    const response = await databases.listDocuments(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_NOTES_ID
    );

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
