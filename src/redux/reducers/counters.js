import { ADD_COUNTER ,INCREMENT_COUNTER,
         DELETE_COUNTER,RESET_COUNTERS} from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_COUNTERS: {  
      const byIds = {...state.byIds};
      if(byIds){
        Object.keys(byIds).forEach(key => {
          byIds[key].value = 0
        })
      }
      return {
        ...state,
        byIds:byIds
      }    
    }
    case INCREMENT_COUNTER: {
      const { id, newValue } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            value:newValue
          }
        }
      };
    }
    case ADD_COUNTER: {
      const { id, value } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            value
          }
        }
      };
    }
    case DELETE_COUNTER: {
      const { id } = action.payload;
      const newState = {...state}; // copy the current state 
      newState.allIds.splice(newState.allIds.indexOf(id),1); // remove id from allIds or `state.allIds.filter(Id => id !== Id)`
      const { [id]:value , ...others} = newState.byIds // remove id object from byIds
      return {
        ...state,
        allIds: newState.allIds,
        byIds:others
      };
    }
    default:
      return state;
  }
}