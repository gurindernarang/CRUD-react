import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Row } from "react-bootstrap";
import "../App.css";
import Error from "./error";
import TableView from "./common/tableView";
import GetRequest from "../utils/apiRequests";

class comment extends Component {
  constructor(props) {
    console.log("Constructor - Users");
    super(props);
    //Always initialize state here
    this.state = {
      dataType: "comments",
      fields: {
        "#": "id",
        Title: "name",
        Comment: "body",
        "User Email": "email",
        PostId: "postId",
      },
      error: null,
      loading: true,
    };
  }
  //Used only when required
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps - Comments", props);
    return state;
  }
  getComments() {
    GetRequest(this.state.dataType, (response) => {
      if (response.data) {
        this.setState({
          comments: response.data,
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
  //In React 17.x, only the UNSAFE_ name will work.
  //Deprecated don't Use
  //Moving code to with side effects to componentDidMount
  // UNSAFE_componentWillMount() {
  //     this.getPosts();
  // }
  render() {
    console.log("Render - Comments");
    if (this.state.error) {
      return <Error />;
    } else {
      return !this.state.loading ? (
        <TableView
          type={this.state.dataType}
          data={this.state.comments}
          fields={this.state.fields}
        />
      ) : (
        <Row className="spinner-center">
          <Spinner animation="border" variant="dark" />
        </Row>
      );
    }
  }
  componentDidMount() {
    console.log("componentDidMount - Comments");
    this.getusers();
  }
}
export default comment;
