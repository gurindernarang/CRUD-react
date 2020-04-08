import React, {Component} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {Row} from 'react-bootstrap';
import '../App.css';
import Error from './error';
import TableView from './tableView';
import GetRequest from '../utils/apiRequests';
import {deleteRequest} from '../utils/apiRequests';

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
    deleteHandler(id,type) {
        const obj = {
            id: id,
            type: type
        }
        deleteRequest(obj,(response)=>{
            if(response.data) {
                console.log("Successfully deleted");
            } else {
                console.log("Error while deleting this");
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
                <TableView type = {this.state.dataType} data = {this.state.posts} fields = {this.state.fields} onClickDelete= {this.deleteHandler}/>
                :<Row className="spinner-center"><Spinner animation="border" variant="dark" /></Row>
            )
        }
    }
    componentDidUpdate(){
        console.log("HIii");
    }
}

export default posts;