import { db } from "../appwrite/database";
import Trash from "../icons/Trash";

const DeleteButton = ({ noteId, setNotes }) => {
  const handleDelete = async (e) => {
    db.notes.delete(noteId);
    setNotes((prevState) => prevState.filter((note) => note.$id !== noteId));
  };

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
};

export default DeleteButton;
