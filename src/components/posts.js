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
        console.log("Constructor - Posts");
        super(props);
        //Always initialize state here
        this.state = {
            dataType : 'posts',
            fields : {'#':'id','Title':'title','Content':'body','User Id':'userId'},
            error: null,
            loading: true
        }
    }
    //Used only when required
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps - Posts', state);
        return state;
    }
    getPosts = () => {    
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
    deleteHandler = (id,type) => {
        const obj = {
            id: id,
            type: type
        }
        deleteRequest(obj,(response)=>{
            if(response.data) {
                console.log("Successfully deleted");
                this.getPosts();
            } else {
                console.log("Error while deleting this");
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
        console.log("Render - Posts"); 
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
    componentDidMount(){
        console.log("componentDidMount - Posts");
        this.getPosts();
    }
}

export default posts;