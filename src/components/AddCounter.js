import React from 'react';
import { connect } from 'react-redux';
import { addCounter,resetCounters } from '../redux/actions';

const AddCounter = ( {addCounter,resetCounters} ) => (
    <div className="my-2">
        <button onClick={ () => resetCounters()} className="btn btn-danger btn-sm m-2">Reset</button>
        <button onClick={ () => addCounter()} className="btn btn-info btn-sm my-2">Add Counter</button>
    </div>
);


export default connect(
    null,
    {addCounter,resetCounters}
    )(AddCounter);