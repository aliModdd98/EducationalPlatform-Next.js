import apis from "@/const/apis";
import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCourse } from "../slice/courses.slice";
import { DELETE_OBJECT_REQUEST, DELETE_OBJECT_SUCCESS, DELETE_OBJECT_FAILURE } from './actionTypes';



export const getCourses = createAsyncThunk("courses/get", async () => {
  console.log("Sending API request...");
  try {
    const response = await axiosInstance.get(apis.courses.get);
    console.log("Received API response:", response.data);
    return response.data;
  } catch (error) {
    console.log("API request failed:", error);
    throw error;
  }
});
export const getCourseById = createAsyncThunk(
  "courses/getById",
  async (id) => {
    return await axiosInstance.get(`${apis.courses.getById(id)}`).then((res) => {
      return res.data;
    });
  }
);

export const updateCourse = (CourseId, updatedCourse) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.patch(`${apis.courses.getById(CourseId)}`, updatedCourse);
      dispatch(setCourse(response.data));
    } catch (error) {
      console.log("error")
    }
  };
};

export const AddCourse = createAsyncThunk(
  'courses/add',
  async (objectData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(apis.courses.get, objectData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCourse = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_OBJECT_REQUEST });

    try {
      const response = await axiosInstance.delete(apis.courses.delete(id));
      dispatch({ type: DELETE_OBJECT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: DELETE_OBJECT_FAILURE, payload: error.message });
    }
  };
};

