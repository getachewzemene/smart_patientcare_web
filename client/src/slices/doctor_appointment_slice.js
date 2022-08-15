import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message_slice";
import {
  getAppointmentByDoctorId,
  updateAppointment,
  getAllAppointment,
} from "../services/user_service";

export const getAppointmentData = createAsyncThunk(
  "appointment/appointmentByDoctorId",
  async ({ id }, thunkAPI) => {
    try {
      const appointmentData = await getAppointmentByDoctorId(id);

      thunkAPI.dispatch(setAppointmentData(appointmentData));
    } catch (error) {
      // console.log(error.response.data);
      const message = error.response.data;
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getAllAppointmentData = createAsyncThunk(
  "appointment/get-all",
  async ({ id }, thunkAPI) => {
    try {
      const allAppointmentData = await getAllAppointment();

      thunkAPI.dispatch(setAllAppointmentData(allAppointmentData));
    } catch (error) {
      // console.log(error.response.data);
      const message = error.response.data;
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateAppointmentData = createAsyncThunk(
  "appointment/update",
  async ({ data }, thunkAPI) => {
    try {
      const responseData = await updateAppointment(data);
      return { updatedData: responseData };
    } catch (error) {
      // console.log(error.response.data);
      const message = error.response.data;

      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
const initialState = {
  isLoading: false,
  appointmentByDoctorId: null,
  allAppointmentData: null,
  hasError: false,
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setAppointmentData: (state, action) => {
      // console.log(action.payload);
      return { appointmentByDoctorId: action.payload };
    },
    setAllAppointmentData: (state, action) => {
      return { allAppointmentData: action.payload };
    },
  },
  extraReducers: {
    [getAppointmentData.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getAppointmentData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [getAppointmentData.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [updateAppointmentData.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [updateAppointmentData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
    },
    [updateAppointmentData.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

const { reducer, actions } = appointmentSlice;
export const { setAppointmentData, setAllAppointmentData } = actions;
export default reducer;
