import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import { FaTrash, FaUserEdit, FaRegEdit } from "react-icons/fa";

class tableView extends Component {
    constructor(props){
        super(props);
        //here props are states of parent components
        //Props are immutable here
        console.log("Constructor - TableView");
        if(props.fields && props.type)
        {
            this.headerArr = Object.keys(props.fields) || [];
            this.rowValues = Object.values(props.fields) || []
        }
    }
    //Used only when required
    //Returns error as there is no initial state
    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps - Posts', props);
    //     return state;
    // }
    render(){
        console.log("Render - TableView");
        return (<Table striped bordered hover variant="dark">
        <thead>
        <tr>
            {this.headerArr.map((header,index) => (
            <th key={index}>{header}</th>)
            )}
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {this.props.data.map((data,index) =>
                (<tr key={index}>
                    {this.rowValues.map((row,index) => (
                    <td key={index}>{data[row]}</td>)
                    )}
                    {this.props.type === 'profiles'?
                    <td> <FaUserEdit onClick={() => this.edit(data.id)}/></td>:
                    <td> <FaRegEdit onClick={() => this.edit(data.id)}/></td>}
                    <td> <FaTrash onClick={() => this.props.onClickDelete(data.id,this.props.type)}/> </td>
                </tr>)
                )
            }
        </tbody>
        </Table>
        )
    }
}
export default tableView;