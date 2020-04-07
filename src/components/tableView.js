import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import { FaTrash } from "react-icons/fa";

class tableView extends Component {
    constructor(props){
        super(props);
        if(props.fields && props.type)
        {
            this.headerArr = Object.keys(props.fields) || [];
            this.rowValues = Object.values(props.fields) || []
        }
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
                    <td> <FaTrash/> </td>
                </tr>)
                )
            }
        </tbody>
        </Table>
        )
    }
}
export default tableView;