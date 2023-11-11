import apis from "@/const/apis";
import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setTeacher } from "../slice/teachers.slice";
import { DELETE_OBJECT_REQUEST, DELETE_OBJECT_SUCCESS, DELETE_OBJECT_FAILURE } from './actionTypes';

export const getTeachers = createAsyncThunk("teachers/get", async () => {
  return await axiosInstance.get(apis.teachers.get).then((res) => {
    return res.data;
  });
});


export const getTeacherById = createAsyncThunk(
    "teachers/getById",
    async (id) => {
      return await axiosInstance.get(`${apis.teachers.getById(id)}`).then((res) => {
        return res.data;
      });
    }
  );


  export const updateTeacher = (teacherId, updatedTeacher) => {
    return async (dispatch) => {
      try {
        const response = await axiosInstance.patch(`${apis.teachers.getById(teacherId)}`, updatedTeacher);
        dispatch(setTeacher(response.data));
      } catch (error) {
        console.log("error")
      }
    };
  };



  export const AddTeacher = createAsyncThunk(
    'teachers/add',
    async (objectData, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.post(apis.teachers.add, objectData);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const deleteTeacher = (id) => {
    return async (dispatch) => {
      dispatch({ type: DELETE_OBJECT_REQUEST });
  
      try {
        const response = await axiosInstance.delete(apis.teachers.delete(id));
        dispatch({ type: DELETE_OBJECT_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: DELETE_OBJECT_FAILURE, payload: error.message });
      }
    };
  };

  