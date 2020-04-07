import React, {Component} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {Row} from 'react-bootstrap';
import '../App.css';
import Error from './error';
import TableView from './tableView';
import GetRequest from '../utils/apiRequests';

class users extends Component{
    constructor(props) {
        super(props)    
        this.state = {
            dataType : 'profiles',
            fields : {'#':'id','Name':'name','User Name':'username','User Email':'email','Address':'address.street','Phone':'phone','Website':'website'},
            error: null
        }
    }
    getusers() {
        this.setState({
            loading : true
        });
        GetRequest(this.state.dataType,(response)=>{
            if(response.data) {
                this.setState({
                    users: response.data,
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