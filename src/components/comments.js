import React, {Component} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {Row} from 'react-bootstrap';
import '../App.css';
import Error from './error';
import TableView from './tableView';
import GetRequest from '../utils/apiRequests';

class comment extends Component{
    constructor(props) {
        super(props)
        this.state = {
            dataType : 'comments',
            fields : {'#':'id','Title':'name','Comment':'body','User Email':'email','PostId':'postId'},
            error: null
        }
    }
    getComments() {
        this.setState({
            loading : true
        });
        GetRequest(this.state.dataType,(response)=>{
            if(response.data) {
                this.setState({
                    comments: response.data,
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
        this.getComments();
    }
    render() {
        if(this.state.error){
            return (
                <Error />);
        } else {
            return (
                !this.state.loading ?
                <TableView type = {this.state.dataType} data = {this.state.comments} fields = {this.state.fields} />
                :<Row className="spinner-center"><Spinner animation="border" variant="dark" /></Row>
            )
        }
    }
}
export default comment;