import { ADD_COUNTER, INCREMENT_COUNTER , DELETE_COUNTER, RESET_COUNTERS} from "./actionTypes";

let nextTodoId = 0;

export const addCounter = () => ({
  type: ADD_COUNTER,
  payload: {
    id: ++nextTodoId,
    value:0
  }
});

export const incrementCounter = (id,newValue) => ({
  type: INCREMENT_COUNTER,
  payload: {
    id,
    newValue
  }
});

export const resetCounters = () => ({
  type: RESET_COUNTERS,
  payload: {}
});

export const deleteCounter = (id) => ({
  type: DELETE_COUNTER,
  payload: {
    id
  }
});
