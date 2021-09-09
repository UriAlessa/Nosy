import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";
import gameReducer from "./gameReducer";
import otherReducer from "./otherReducers";

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  game: gameReducer,
  other: otherReducer,
});

export default rootReducer;
