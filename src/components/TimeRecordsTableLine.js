import React from 'react';
import { convertDateToString, durationFormatter } from '../helpers.js';

class TimeRecordsTableLine extends React.Component {
    loadRecordForEditing = (event) => {
        console.log(event.target.dataset.id);
        this.props.passClickedRecordID(event.target.dataset.id);
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{convertDateToString(this.props.details.from,'dd/MM/yyyy')}</td>
                <td>{convertDateToString(this.props.details.from,'hh:mm')}</td>
                <td>{convertDateToString(this.props.details.until,'hh:mm')}</td>
                <td>{durationFormatter(this.props.details.duration)}</td>
                <td>{this.props.details.location}</td>
                <td><pre className="workdescription-textarea">{this.props.details.workdescription}</pre></td>
                <td>{this.props.details.customer}</td>
                <td><button className="edit-timerecord" data-id={this.props.index} onClick={this.loadRecordForEditing}>Edit</button></td>
            </tr>
        )
    }
}

export default TimeRecordsTableLine;