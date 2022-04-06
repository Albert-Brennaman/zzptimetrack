import React from 'react';
import AddEditTimeRecord from './AddEditTimeRecords.js';
import TimeRecordsTable from './TimeRecordsTable.js';

class TimeRecords extends React.Component {
    state = {
        timeRecordId: undefined
    }

    passClickedRecordID = (id) => {
        this.setState({
            timeRecordId: id
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.timeRecordId === undefined ? 'Add Record' : 'Edit Record:' + this.state.timeRecordId}</h1>
                <AddEditTimeRecord
                    addTimeRecord={this.props.addTimeRecord}
                    selectedTimeRecord={this.state.timeRecordId}
                />
                <TimeRecordsTable 
                    timeRecords={this.props.timeRecords}
                    passClickedRecordID={this.passClickedRecordID}
                />
            </div>
        )
    }
}

export default TimeRecords;