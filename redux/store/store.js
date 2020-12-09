import { createStore, compose } from "redux";
import { Reducer } from "../reducer/reducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware} from "redux";

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;