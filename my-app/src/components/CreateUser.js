import React, { useContext, useState } from "react";
import AlertMessage from "./AlertMessage";
import { MyContext } from "./MyContext";
import {
  numberValidator,
  onlyAlphabetValidator,
  phoneValiddator,
  zipCodeValidator,
} from "../util/Validator";
import { callCreateUserAPI } from "../ApiCalls";

function CreateUser() {
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
  const [showAlert, setShowAlert] = useState(false);
  let initialValue = {
    name: "",
    username: "",
    age: "",
    contact: "",
    userType: "",
    email: "",
    city: "",
    pincode: "",
    password: "",
    address: "",
  }
  const [userDetails, setUserDetails] = useState(initialValue);
  const handleChange = (key, val) => {
    setUserDetails({ ...userDetails, [key]: val });
  };
  const submitDetails = (e) => {
    e.preventDefault();

    let isValid = validateRequest(userDetails);
    if (isValid.error === false) {
      setAlert(true);
      setAlertTitle("Sorry!! Please provide valide inputs");
      setAlertMessage(isValid.message);
      setMessageType("alert-danger");
      setShowAlert(true);
    } else {
      callCreateUserAPI(userDetails)
        .then(response => {
          setAlert(true);
          setAlertTitle("Details are saved successfuly");
          setAlertMessage("");
          setMessageType("alert-success");
          setShowAlert(true);
          resetData();
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });


    }

  };
  const resetData = () => {
    setUserDetails(initialValue);
  }

  const validateRequest = (reqDetails) => {
    let errorDetails = {
      error: false,
      message: "",
    };
    let message = "";
    if (
      reqDetails.name === "" ||
      !onlyAlphabetValidator(reqDetails.name)
    )
      message = message + " Name ";
    if (!onlyAlphabetValidator(reqDetails.username))
      message = message + " User Name ";
    if (!zipCodeValidator(reqDetails.pincode)) message = message + " Zip Code ";
    if (!phoneValiddator(reqDetails.contact)) message = message + " Contact ";
    if (!numberValidator(reqDetails.age)) message = message + " Age ";
    if (!onlyAlphabetValidator(reqDetails.address))
      message = message + " Address ";
    if (!onlyAlphabetValidator(reqDetails.city)) message = message + " City ";

    if (message === "")
      return {
        error: true,
        message: "",
      };
    else
      return {
        error: false,
        message: message,
      };
  };


  const [userTypeList, setUserTypeList] = useState([
    "Student",
    "Teacher",
    "Peon",
    "Parent",
  ]);
  return (
    <div>
      <h1>User</h1>
      {showAlert ? (
        <>
          <AlertMessage></AlertMessage>
        </>
      ) : (
        ""
      )}
      <form className="row g-3">
        <div className="col-sm-5">
          <label for="inputAddress" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Name"
            onChange={(e) => handleChange("name", e.target.value)}
            value={userDetails.name}
          />
        </div>
        <div className="col-sm-5">
          <label for="inputAddress" className="form-label">
            User Name
          </label>
          <input
            value={userDetails.username}
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Last Name"
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <label for="inputAddress" className="form-label">
            Age
          </label>
          <input
            maxLength={2}
            type="text"
            className="form-control"
            id="inputAddress"
            onChange={(e) => handleChange("age", e.target.value)}
            value={userDetails.age}
          />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            onChange={(e) => handleChange("email", e.target.value)}
            value={userDetails.email}
          />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            onChange={(e) => handleChange("password", e.target.value)}
            value={userDetails.password}
          />
        </div>
        <div className="col-6">
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            onChange={(e) => handleChange("address", e.target.value)}
            value={userDetails.address}
          />
        </div>
        <div className="col-6">
          <label for="inputAddress2" className="form-label">
            Contact
          </label>
          <input
            value={userDetails.contact}
            maxLength={10}
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="123465890"
            onChange={(e) => handleChange("contact", e.target.value)}

          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input
            value={userDetails.city}
            type="text"
            className="form-control"
            id="inputCity"
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Select Type:
          </label>
          <select
            value={userDetails.userType}
            id="inputState"
            className="form-select"
            onChange={(e) => handleChange("userType", e.target.value)}
          >
            <option selected>Choose...</option>
            {userTypeList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input
            value={userDetails.pincode}
            maxLength={6}
            type="text"
            className="form-control"
            id="inputZip"
            onChange={(e) => handleChange("pincode", e.target.value)}
          />
        </div>

        {/* <div className='col-sm-1'>
                    {
                        userTypeList.map((item, index) => (
                            <div className="form-check">
                                <input className="form-check-input" type="radio" value={item} name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => handleChange("userType", e.target.value)} />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    {item}
                                </label>
                            </div>


                        ))
                    }
                </div> */}

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => submitDetails(e)}
          >
            Submit
          </button> <br></br>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => resetData()}
          >
            Reset
          </button>
        </div>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>ddd</p>
    </div>
  );
}

export default CreateUser;
