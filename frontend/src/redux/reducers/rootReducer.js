import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";
import otherReducer from "./otherReducers";

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  other: otherReducer,
});

export default rootReducer;
