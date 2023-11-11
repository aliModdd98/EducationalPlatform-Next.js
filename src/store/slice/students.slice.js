import { createSlice } from "@reduxjs/toolkit";
import { getStudentById, getStudents } from "../actions/students.action";






const studentsSlice = createSlice({
  name: "students",
  initialState: {
    data: [],
    selectedStudent: null,
    isLoading: false,
    error: null,
    
  },


  
  reducers: {
    setStudent: (state, action) => {
      return action.payload;
    },
    clearStudent: (state) => {
      return null;
    },
   
    deleteStudent: (state, action) => {
      const deletedStudentId = action.payload.id; 
      state.data = state.data.filter((student) => student.id !== deletedStudentId);
    },
  
  },
  
  extraReducers: (builder) => {
    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getStudentById.fulfilled, (state, action) => {
      state.selectedStudent = action.payload;
    });
  
  },
});


export const { setStudent , clearStudent ,addStudent,deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;




