import apis from "@/const/apis";
import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setStudent } from "../slice/students.slice";
import { DELETE_OBJECT_REQUEST, DELETE_OBJECT_SUCCESS, DELETE_OBJECT_FAILURE } from './actionTypes';


export const getStudents = createAsyncThunk("students/get", async () => {
    return await axiosInstance.get(apis.students.get).then((res) => {
      return res.data;
    });
  });

  export const getStudentById = createAsyncThunk(
    "students/getById",
    async (id) => {
      return await axiosInstance.get(`${apis.students.getById(id)}`).then((res) => {
        return res.data;
      });
    }
  );
  export const updateStudent = (StudentId, updatedStudent) => {
    return async (dispatch) => {
      try {
        const response = await axiosInstance.patch(`${apis.students.getById(StudentId)}`, updatedStudent);
        dispatch(setStudent(response.data));
      } catch (error) {
        console.log("error")
      }
    };
  };
  export const deleteStudent = (id) => {
    return async (dispatch) => {
      dispatch({ type: DELETE_OBJECT_REQUEST });
  
      try {
        const response = await axiosInstance.delete(apis.students.delete(id));
        dispatch({ type: DELETE_OBJECT_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: DELETE_OBJECT_FAILURE, payload: error.message });
      }
    };
  };

  export const AddStudent = createAsyncThunk(
    'stidents/add',
    async (objectData, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.post(apis.students.add, objectData);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );


  