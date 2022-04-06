import React from 'react';
import TimeRecords from './TimeRecords.js';

class App extends React.Component {
    state = {
        timerecords: {}
    }

    addTimeRecord = (timerecord) => {
        // 1. take a copy of existing state
        const timerecords = {...this.state.timerecords};
        // 2. update the copied state
        timerecords[`TR${Date.now()}`] = timerecord;
        // 3. set the new fishes objec tto state
        this.setState({
            timerecords: timerecords
        });
    }; 

    render() {
        return (
            <div className="appcontainer">
                <TimeRecords 
                    addTimeRecord={this.addTimeRecord}
                    timeRecords={this.state.timerecords}
                />
            </div>
        )
    }
}

export default App;