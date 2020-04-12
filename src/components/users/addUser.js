import React, { Component } from "react";
import Input from "../UI/Input/input";

class addUser extends Component {
  render() {
    return (
      <form>
        <Input
          inputtype="input"
          type="text"
          label="Id"
          placeholder="Id"
          disabled="disable"
        />
        <Input
          inputtype="input"
          type="text"
          label="Name"
          placeholder="Enter Name"
        />
        <Input
          inputtype="input"
          type="text"
          label="User Name"
          placeholder="User Name"
          disabled="disable"
        />
        <Input
          inputtype="input"
          type="email"
          label="User Email"
          placeholder="Enter User Email"
        />
        <Input
          inputtype="input"
          type="address"
          label="Address"
          placeholder="Enter Address"
        />
        <Input
          inputtype="input"
          type="phone"
          label="Contact No."
          placeholder="Enter Contact Number"
        />
        <Input
          inputtype="input"
          type="website"
          label="Website"
          placeholder="Enter Website"
        />
      </form>
    );
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      console.log(param);
    }
    console.log("this.props.location.pathname", this.props.location.pathname);
    console.log("Query", query);
  }
}

export default addUser;
