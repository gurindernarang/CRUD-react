import React, {Component} from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import {Row} from 'react-bootstrap';
import '../App.css';
import Error from './error';
import TableView from './tableView';

class users extends Component{
    constructor(props) {
        super(props)    
        this.state = {
            dataType : 'profiles',
            fields : {'#':'id','Name':'name','User Name':'username','User Email':'email','Address':'address.street','Phone':'phone','Website':'website'},
            data: [],
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
            return (
                <Error />);
        } else {
            return (
                !this.state.loading ?
                <TableView type = {this.state.dataType} data = {this.state.users} fields = {this.state.fields} />
                :<Row className="spinner-center"><Spinner animation="border" variant="dark" /></Row>
            )
        }
    }
}

export default users;