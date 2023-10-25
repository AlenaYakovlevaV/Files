import React from "react";

export const MainButton = ({setVisible}) => {

  return <div>
    <button className="btn__main btn-action" onClick={() => setVisible(true)}>+</button>
    <button className="btn__main btn-action btn-right" onClick={() => setVisible(false)}>-</button>
    <button className="btn__main btn-print" onClick={() => window.print()}>Print</button>
  </div>
}