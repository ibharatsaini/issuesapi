import { combineReducers  } from "redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { issueRedcuer } from "./reducers/issues.reducer";

//combinereducers used to have multiple reducers in future
const reducers = combineReducers({
    issue: issueRedcuer
})

//create and exporting store
export const store = createStore(reducers,applyMiddleware(thunk))

