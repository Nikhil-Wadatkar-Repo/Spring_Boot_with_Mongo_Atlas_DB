import React, { useState } from "react";
import ChildComp from "./ChildComp";

function Parentcomp() {
  const [name, setName] = useState("Hiii");
  return (
    <div>
      <h2>Parent Comp</h2>
      <ChildComp name={name} setname={setName}></ChildComp>
    </div>
  );
}

export default Parentcomp;
