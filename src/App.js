import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NewPage } from "./newPage";

const RenderInWindow = (props, setOpen) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(window);

  useEffect(() => {
    const div = document.createElement("div");
    setContainer(div);
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open("", "_blank");
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};

function App() {
  const [open, setOpen] = useState();
  return (
    <>
      <button onClick={() => setOpen(!open)}>open</button>
      {open && <RenderInWindow setOpen={setOpen}><NewPage /></RenderInWindow>}
    </>
  );
}

export default App;
