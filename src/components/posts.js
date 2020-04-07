import React, {Component} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {Row} from 'react-bootstrap';
import '../App.css';
import Error from './error';
import TableView from './tableView';
import GetRequest from '../utils/apiRequests';

class posts extends Component{
    constructor(props) {
        super(props)    
        this.state = {
            dataType : 'posts',
            fields : {'#':'id','Title':'title','Content':'body','User Id':'userId'},
            error: null
        }
    }
    getPosts() {
        this.setState({
            loading : true
        });
        GetRequest(this.state.dataType,(response)=>{
            if(response.data) {
                this.setState({
                    posts: response.data,
                    loading : false
                });
            } else {
                this.setState({
                    error: true,
                    loading : false
                });
            }
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