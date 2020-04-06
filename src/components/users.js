import React, {Component} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import {Row} from 'react-bootstrap';
import '../App.css';
import Error from './error';

class users extends Component{
    constructor(props) {
        super(props)    
        //State
        this.state = {
            users : [],
            error: null
        }
    }
    getusers() {
        this.setState({
            loading : true
        });
        axios.get('http://localhost:3001/profiles')
        .then((response) => {
            this.setState({
                users: response.data,
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
        this.getusers();
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
            <th>Name</th>
            <th>UserName</th>
            <th>User Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
            {this.state.users.map(user =>
                (<tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
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

export default users;