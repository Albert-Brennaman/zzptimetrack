import React from 'react';
import { convertDateAndTimeStringToDateTime, durationCalculator } from '../helpers.js';

class AddEditTimeRecords extends React.Component {
    dateRef = React.createRef();
    fromRef = React.createRef();
    untilRef = React.createRef();
    locationRef = React.createRef();
    customerRef = React.createRef();
    workDescriptionRef = React.createRef();

    addEditRecord = (event,id) => {
        event.preventDefault();
        console.log('lets add or edit a record');

        //add
        const thisFrom = convertDateAndTimeStringToDateTime(this.dateRef.current.value,this.fromRef.current.value);
        const thisUntil = convertDateAndTimeStringToDateTime(this.dateRef.current.value,this.untilRef.current.value);
        const thisDuration = durationCalculator(thisFrom,thisUntil);
        
        const timeRecord = {
            from: thisFrom,
            until: thisUntil,
            duration: thisDuration,
            location: this.locationRef.current.value,
            customer: this.customerRef.current.value,
            workdescription: this.workDescriptionRef.current.value
        }
        this.props.addTimeRecord(timeRecord);

        event.currentTarget.reset();
    }

    render() {
        return (
            <form className="timerecord-input" onSubmit={this.addEditRecord}>
                <div className="form__items__firstrow">
                    <div className="form__item form__item__date">
                        <label>Date</label>
                        <input name="date" ref={this.dateRef} type="text" placeholder="dd/mm/yy"/>
                    </div>
                    <div className="form__item form__item__time">
                        <label>From</label>
                        <input name="from" ref={this.fromRef} type="text" placeholder="hh:mm"/>
                    </div>
                    <div className="form__item form__item__time">
                        <label>Until</label>
                        <input name="until" ref={this.untilRef} type="text" placeholder="hh:mm"/>
                    </div>
                    <div className="form__item form__item__location">
                        <label>Location</label>
                        <input name="location" ref={this.locationRef} type="text" placeholder="location"/>
                    </div>
                    <div className="form__item form__item__customer">
                        <label>Customer</label>
                        <input name="customer" ref={this.customerRef} type="text" placeholder="customer"/>
                    </div>
                </div>
                <div className="form__items_secondrow">
                    <div className="form__item form__item__workdescription">
                        <label>Workdescription</label>
                        <textarea name="workdescription" ref={this.workDescriptionRef} rows="5"></textarea>
                    </div>
                    <input type="submit" name="submit" value="Save"/>
                </div>
            </form>
        )
    }
}

export default AddEditTimeRecords;