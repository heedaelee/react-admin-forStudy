import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="john Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="text" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+81 123 123 123" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Ulsan | Korea" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value={"yes"}>yes</option>
            <option value={"no"}>no</option>
          </select>
        </div>
        <div className="newUserItem">
          <button className="userCreateButton">Create</button>
        </div>
      </form>
    </div>
  );
}
