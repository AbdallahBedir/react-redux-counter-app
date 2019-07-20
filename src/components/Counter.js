import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from '../redux/actions';
import { deleteCounter } from '../redux/actions';

const Counter = ({counter,incrementCounter,deleteCounter}) => (    
    <div className="my-1">
        <span className={"badge badge-" + (counter.value ? "primary" : "warning")}>{counter.value}</span>&nbsp;
        <button className="btn btn-secondary" onClick={ () => incrementCounter(counter.id,counter.value +1)}>Increment</button>&nbsp;
        <button className="btn btn-danger" onClick={ () => deleteCounter(counter.id)}>Delete</button>&nbsp;
    </div>
)

export default connect(
    null,
    {incrementCounter,deleteCounter}
    )(Counter)