import { createSlice } from "@reduxjs/toolkit";
import {  getTeachers, getTeacherById } from "@/store/actions/teachers.action";
import axiosInstance from "@/utils/axiosInstance";






const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    data: [],
    selectedTeacher: null,
    isLoading: false,
    error: null,
    
  },


  
  reducers: {
    setTeacher: (state, action) => {
      return action.payload;
    },
    clearTeacher: (state) => {
      return null;
    },
   
    deleteTeacher: (state, action) => {
      const deletedTeacherId = action.payload.id; 
      state.data = state.data.filter((teacher) => teacher.id !== deletedTeacherId);
    },
  
  },
  
  extraReducers: (builder) => {
    builder.addCase(getTeachers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getTeacherById.fulfilled, (state, action) => {
      state.selectedTeacher = action.payload;
    });
  
  },
});


export const { setTeacher , clearTeacher ,deleteTeacher } = teachersSlice.actions;
export default teachersSlice.reducer;




