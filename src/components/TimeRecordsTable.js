import React from 'react';
import TimeRecordsTableLine from './TimeRecordsTableLine.js';

class TimeRecordsTable extends React.Component {
    myTestFunction = () => {
        const currTimeRecords = this.props.timeRecords;

        let myArray = Object.keys(currTimeRecords);
        console.log(myArray);

        myArray.forEach( (key) => {
            console.log(key);
            const recordKey = key;
            console.log(recordKey);
            console.log(currTimeRecords);
        });

    }
    
    render() {
        return (
            <div className="timerecords-table">
                <div className="table" id="timerecords__table">
                    <table className="timerecords__summarized">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>From</th>
                                <th>Until</th>
                                <th>Duration</th>
                                <th>Location</th>
                                <th>Workdescription</th>
                                <th>Customer</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody id="mytablebody">
                            {Object.keys(this.props.timeRecords).map(key => (
                                <TimeRecordsTableLine
                                    key={key}
                                    index={key}
                                    details={this.props.timeRecords[key]}
                                    passClickedRecordID={this.props.passClickedRecordID}
                                />)
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TimeRecordsTable;