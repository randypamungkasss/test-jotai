"use client";

import { useAtomValue } from "jotai";
import { notesAtom } from "./note.atom";

export const NoteList = () => {
  const notes = useAtomValue(notesAtom);
  return (
    <div>
      <h1>My List : </h1>
      <p>
        {notes.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </p>
    </div>
  );
};
