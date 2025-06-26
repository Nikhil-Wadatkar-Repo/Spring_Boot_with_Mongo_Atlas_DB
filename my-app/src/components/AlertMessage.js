import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";

function AlertMessage() {
  const {
    text,
    setText,
    alert,
    setAlert,
    alertMessage,
    setAlertMessage,
    messageType,
    setMessageType,
    alertTitle,
    setAlertTitle,
  } = useContext(MyContext);
  return (
    <div>
      <>
        <div>
          <div className={"alert " + messageType} role="alert">
            <h5 className="alert-heading">{alertTitle}!</h5>
            <hr></hr>
            <p className="mb-0">{alertMessage}</p>
          </div>
        </div>
      </>
    </div>
  );
}

export default AlertMessage;
