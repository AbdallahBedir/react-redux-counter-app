import React from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
import { getCounters } from "../redux/selectors";

const CountersList = ({ counters }) => (
  <ul className="todo-list">
    {counters && counters.length
      ? counters.map((counter, index) => {
          return <Counter key={`counter-${counter.id}`} counter={counter} />;
        })
      : "No counters, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const counters = getCounters(state);
  return { counters };
};

export default connect(mapStateToProps)(CountersList);
