import React, {Component} from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import {Row} from 'react-bootstrap';
import '../App.css';
import Error from './error';
import TableView from './tableView';

class posts extends Component{
    constructor(props) {
        super(props)    
        this.state = {
            dataType : 'posts',
            fields : {'#':'id','Title':'title','Content':'body','User Id':'userId'},
            data: [],
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
            return (
                <Error />);
        } else {
            return (
                !this.state.loading ?
                <TableView type = {this.state.dataType} data = {this.state.posts} fields = {this.state.fields} />
                :<Row className="spinner-center"><Spinner animation="border" variant="dark" /></Row>
            )
        }
    }
}

export default posts;