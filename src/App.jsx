import { useState } from "react";
import DragAndDrop from "./components/dragAndDrop/DragAndDrop";

function App() {
  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);
  return <DragAndDrop list={list} setList={setList} />;
}

export default App;
