import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import coursesReducer from "./slice/courses.slice";
import teachersReducer from './slice/teachers.slice';
import studentsReducer from './slice/students.slice';
import authReducer from './slice/auth.slice'
const reducers = {
  reducer: {
    courses: coursesReducer,
    teachers:teachersReducer,
    students:studentsReducer,
    auth: authReducer,
  },
};

const store = configureStore(reducers, applyMiddleware(reduxThunk));

export default store;
