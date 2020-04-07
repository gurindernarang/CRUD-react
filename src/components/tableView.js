import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import { FaTrash } from "react-icons/fa";
import { deleteRequest } from '../utils/apiRequests';

class tableView extends Component {
    constructor(props){
        super(props);
        if(props.fields && props.type)
        {
            this.headerArr = Object.keys(props.fields) || [];
            this.rowValues = Object.values(props.fields) || []
        }
    }
    delete(id, type){
        const obj = {
            id: id,
            type: type
        }
        deleteRequest(obj,(response)=>{
            if(response.data) {
                console.log("Successfully deleted");
                this.render();
            } else {
                console.log("Error while deleting this");
            }
        });
    }
    render(props){
        return (<Table striped bordered hover variant="dark">
        <thead>
        <tr>
            {this.headerArr.map((header,index) => (
            <th key={index}>{header}</th>)
            )}
            <th> </th>
        </tr>
        </thead>
        <tbody>
            {this.props.data.map((data,index) =>
                (<tr key={index}>
                    {this.rowValues.map((row,index) => (
                    <td key={index}>{data[row]}</td>)
                    )}
                    <td> <FaTrash onClick={() => this.delete(data.id,this.props.type)}/> </td>
                </tr>)
                )
            }
        </tbody>
        </Table>
        )
    }
}
export default tableView;