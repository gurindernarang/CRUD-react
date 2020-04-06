import React, {Component} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import {Row} from 'react-bootstrap';
import '../App.css';
import Error from './error';

class comment extends Component{
    constructor(props) {
        super(props)    
        //State
        this.state = {
            comments : [],
            error: null
        }
    }
    getComments() {
        this.setState({
            loading : true
        });
        axios.get('http://localhost:3001/comments')
        .then((response) => {
            this.setState({
                comments: response.data,
                loading : false
            });
        })
        .catch( (error) => {
            console.log("Error",error);
            this.setState({
                error: error,
                loading : false
            });
        })
        .then(function () {
            console.log("always executed");
        });
    }
    componentWillMount() {
        this.getComments();
    }
    render() {
        if(this.state.error){
            console.log('error',this.state.error);
            return <Error />;
        } else {
        return (!this.state.loading?<Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Comment</th>
            <th>User Email</th>
            <th>PostId</th>
          </tr>
        </thead>
        <tbody>
            {this.state.comments.map(comment =>
                (<tr>
                    <td>{comment.id}</td>
                    <td>{comment.name}</td>
                    <td>{comment.body}</td>
                    <td>{comment.email}</td>
                    <td>{comment.postId}</td>
                </tr>)
                )
            }
        </tbody>
      </Table>
      : <Row className="spinner-center"><Spinner animation="border" variant="dark" /></Row>
        )
        }
    }
}

export default comment;