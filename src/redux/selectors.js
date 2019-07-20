
export const getCountersState = store => store.counters;

export const getCountersList = store =>
    getCountersState(store) ? getCountersState(store).allIds : [];

export const getCounterById = (store, id) =>
    getCountersState(store) ? { ...getCountersState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getCounters = store =>
    getCountersList(store).map(id => getCounterById(store, id));

export const getActiveCounters = store => {    
    let numOfActive = 0;
    if(getCountersState(store)){
        Object.keys(getCountersState(store).byIds).forEach(key => {
            if(getCountersState(store).byIds[key]){
                numOfActive = getCountersState(store).byIds[key].value > 0 ? ++numOfActive : numOfActive;
            }
        })
    }
    return numOfActive;
} 
