import React, { useContext, useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { databases } from "../appwrite/config";
import { db } from "../appwrite/database";
import { NoteContext } from "../context/NoteContext";
import Controls from "../components/Controls";

const NotesPage = () => {
  const { notes, setNotes } = useContext(NoteContext);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} setNotes={setNotes} />
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
