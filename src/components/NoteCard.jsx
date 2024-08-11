import React, { useEffect, useRef, useState } from "react";
import Trash from "../icons/Trash";
import { autoGrow, bodyParser, setNewOffset, setZIndex } from "../utils";

const NoteCard = ({ note }) => {
  const [position, setPosition] = useState(bodyParser(note.position));
  const colors = bodyParser(note.colors);
  const body = bodyParser(note.body);

  let mouseStartPos = { x: 0, y: 0 };

  const cardRef = useRef(null);
  const textAreaRef = useRef(null);

  const mouseDown = (e) => {
    setZIndex(cardRef.current);
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  const mouseMove = (e) => {
    let mouseMoveDir = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    const newPosition = setNewOffset(cardRef.current, mouseMoveDir);
    setPosition(newPosition);
  };

  const mouseUp = (e) => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  };

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  return (
    <div
      ref={cardRef}
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className="card-header"
        style={{
          backgroundColor: colors.colorHeader,
        }}
        onMouseDown={mouseDown}
      >
        <Trash />
      </div>
      <div className="card-body">
        <textarea
          ref={textAreaRef}
          defaultValue={body}
          style={{ color: colors.colorText }}
          onInput={() => autoGrow(textAreaRef)}
          onFocus={() => setZIndex(cardRef.current)}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteCard;
