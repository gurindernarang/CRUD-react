import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Row } from "react-bootstrap";
import Error from "../error";
import TableView from "../common/tableView";
import GetRequest from "../../utils/apiRequests";

class users extends Component {
  constructor(props) {
    console.log("Constructor - Users");
    super(props);
    //Always initialize state here
    this.state = {
      dataType: "profiles",
      fields: {
        "#": "id",
        Name: "name",
        "User Name": "username",
        "User Email": "email",
        Address: "address.street",
        Phone: "phone",
        Website: "website",
      },
      error: null,
      loading: true,
    };
  }
  //Used only when required
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps - Users", props);
    return state;
  }
  getusers() {
    GetRequest(this.state.dataType, (response) => {
      if (response.data) {
        this.setState({
          users: response.data,
          loading: false,
        });
      } else {
        this.setState({
          error: true,
          loading: false,
        });
      }
    });
  }
  editDetailsUser(id) {
    console.log("Add user", id);
    window.location.href = "users/" + id;
  }
  //In React 17.x, only the UNSAFE_ name will work.
  //Deprecated don't Use
  //Moving code to with side effects to componentDidMount
  // UNSAFE_componentWillMount() {
  //     this.getPosts();
  // }
  render() {
    console.log("Render - Users");
    if (this.state.error) {
      return <Error />;
    } else {
      return !this.state.loading ? (
        <TableView
          type={this.state.dataType}
          data={this.state.users}
          fields={this.state.fields}
          onClickAddUser={this.editDetailsUser}
        />
      ) : (
        <Row className="spinner-center">
          <Spinner animation="border" variant="dark" />
        </Row>
      );
    }
  }
  componentDidMount() {
    console.log("componentDidMount - Users");
    this.getusers();
  }
}

export default users;
