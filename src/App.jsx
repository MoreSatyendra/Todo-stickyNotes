import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NotesPage from "./pages/NotesPage";
import NotesProvider from "./context/NoteContext";

function App() {
  return (
    <div id="app">
      <NotesProvider>
        <NotesPage />
      </NotesProvider>
    </div>
  );
}

export default App;
