import { createSlice } from "@reduxjs/toolkit";
import { getCourseById, getCourses } from "../actions/courses.action";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    selectedCourse: null,
    isLoading: false,
    error: null,
  },

  reducers: {
    setCourse: (state, action) => {
      return action.payload;
    },
    clearCourse: (state) => {
      return null;
    },
   
    deleteCourse: (state, action) => {
      const deletedCourseId = action.payload.id; 
      state.data = state.data.filter((course) => course.id !== deletedCourseId);
    },
  
  },

  extraReducers: (builder) => {
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getCourseById.fulfilled, (state, action) => {
      state.selectedCourse = action.payload;
    });
  
  },
});

export const { setCourse,clearCourse,deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;