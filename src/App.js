import { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <h3>Modal Cutom page</h3> <br />
      <button disabled={isOpen} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && (
        <div className="outer" onClick={() => setIsOpen(false)}>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}
