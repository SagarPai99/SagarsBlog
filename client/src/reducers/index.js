import {combineReducers} from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import postReducer from "./postReducers";
import errorReducers from "./errorReducers";

export default combineReducers({
    auth: authReducer,
    post: postReducer,
    errors: errorReducers
});