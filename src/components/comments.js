import React, {Component} from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import {Row} from 'react-bootstrap';
import '../App.css';
import Error from './error';
import TableView from './tableView';

class comment extends Component{
    constructor(props) {
        super(props)
        this.state = {
            dataType : 'comments',
            fields : {'#':'id','Title':'name','Comment':'body','User Email':'email','PostId':'postId'},
            data: [],
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
                data: response.data,
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
            return (
                <Error />);
        } else {
            return (
                !this.state.loading ?
                <TableView type = {this.state.dataType} data = {this.state.data} fields = {this.state.fields} />
                :<Row className="spinner-center"><Spinner animation="border" variant="dark" /></Row>
            )
        }
    }
}
export default comment;