import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import { callGetUsersAPI } from "../ApiCalls";

function TeachersList() {
  const { text, setText } = useContext(MyContext);
  const [list, setList] = useState([]);
  useEffect(() => { 
    callGetUsers();
  }, [])
  const callGetUsers = () => {
    callGetUsersAPI()
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }
  return (
    <div className="container">
      <h4>Teachers List</h4>
      <div className="row">
        {/* <div>
          <div className="row">
            <div className="col-sm-3">
              <label for="inputAddress" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Name"
              // onChange={(e) => handleChange("firstname", e.target.value)}
              />
            </div>
            <div className="col-sm-3">
              <label for="inputAddress" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Name"
              // onChange={(e) => handleChange("firstname", e.target.value)}
              />
            </div>
            <div className="col-sm-3">
              <label for="inputAddress" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Name"
              // onChange={(e) => handleChange("firstname", e.target.value)}
              />
            </div>
            <div className="col-sm-3">
              <label for="inputAddress" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Name"
              // onChange={(e) => handleChange("firstname", e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <button>Update</button>
          </div>
        </div> */}
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((user, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.status}</td>
                <td><button>Edit</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeachersList;
