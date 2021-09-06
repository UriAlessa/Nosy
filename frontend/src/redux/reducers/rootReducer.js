import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    questions: questionsReducer,
});

export default rootReducer;
