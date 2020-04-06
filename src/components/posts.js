import React, {Component} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import {Row} from 'react-bootstrap';
import '../App.css';
import Error from './error';

class posts extends Component{
    constructor(props) {
        super(props)    
        //State
        this.state = {
            posts : [],
            error: null
        }
    }
    getPosts() {
        this.setState({
            loading : true
        });
        axios.get('http://localhost:3001/posts')
        .then((response) => {
            this.setState({
                posts: response.data,
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
        this.getPosts();
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
            <th>Content</th>
            <th>User Id</th>
          </tr>
        </thead>
        <tbody>
            {this.state.posts.map(post =>
                (<tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>{post.userId}</td>
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

export default posts;