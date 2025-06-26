import React from "react";

function ChildComp({name,setname}) {
  return (
    <div>
      <h4>ChildComp :</h4> {name}{" "}
      <button onClick={(e) => setname("Ankur")}>Click</button>
    </div>
  );
}

export default ChildComp;
