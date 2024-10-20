import { NoteCreate } from "@/components/notes/note.create";
import { NoteList } from "@/components/notes/note.list";

export default function App() {
  return (
    <div>
      <NoteCreate />
      <NoteList />
    </div>
  );
}
