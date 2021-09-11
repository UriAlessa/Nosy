import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";
import gameReducer from "./gameReducer";
import otherReducer from "./otherReducers";
import adminUsersReducer from './admin/adminUserReducer'
import adminQuestionsReducer from "./admin/adminQuestionsReducer"

const rootReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  game: gameReducer,
  other: otherReducer,
  adminUsers: adminUsersReducer,
  adminQuestions: adminQuestionsReducer
});

export default rootReducer;
