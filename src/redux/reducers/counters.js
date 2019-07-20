import { ADD_COUNTER ,INCREMENT_COUNTER,
         DELETE_COUNTER,RESET_COUNTERS} from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_COUNTERS: {      
      return {
        ...state,
        byIds:resetCounters(state.byIds)
      };
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
      return {
        ...state,
        allIds: state.allIds.filter(Id => id != Id),
        byIds:deleteCounterById(state.byIds,id)
      };
    }
    default:
      return state;
  }
}

function deleteCounterById (ids,id){
  const { [id]:value , ...others} = ids;
  return others;
}

function resetCounters (allIds){  
  Object.keys(allIds).forEach(key => {
    allIds[key].value = 0
  })
  return allIds;
}